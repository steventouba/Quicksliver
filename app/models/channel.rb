# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  type       :integer          default(0), not null
#  is_private :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
  validates :name, :creator_id, :channel_type, presence: true 
  validates :channel_type, inclusion: {in: [0, 1]}
  validates :is_private, inclusion: {in: [true, false]}

  belongs_to :creator, 
    foreign_key: :creator_id, 
    class_name: :User 
  
  has_many :messages, 
    foreign_key: :channel_id, 
    class_name: :Message 

  has_many :channel_memberships, 
    foreign_key: :channel_id, 
    class_name: :ChannelMembership, 
    dependent: :destroy 

  has_many :subscribers, 
    through: :channel_memberships, 
    source: :channel_subscribers

end
