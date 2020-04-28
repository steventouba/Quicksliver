# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  phone_number    :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true 
  validates :email, :session_token, uniqueness: true  #change email validation to use regex or gem checking for domain can also use URI::MailTo::EMAIL_REGEXP
  validates :password, length: {minimum: 6}, allow_nil: true 
  validates :phone_number, length: {minimum: 10}, allow_nil: true 
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_user_by_credentials(email, password) 
    user = User.find_by(email: email)

    return nil unless user

    user.password?(password) ? user : nil 
  end 

  def password=(input_password)
    @password = input_password

    self.password_digest= BCrypt::Password.create(input_password)
  end 

  def password?(password) 
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    # remove loud save after testing 
    self.save!

    self.session_token
  end 

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end 

end
