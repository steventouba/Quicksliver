# == Schema Information
#
# Table name: channel_memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  is_admin   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ChannelMembership < ApplicationRecord

  belongs_to :channel_subscribers,
    foreign_key: :user_id, 
    class_name: :User

  belongs_to :channels,
    foreign_key: :channel_id, 
    class_name: :Channel  



end
