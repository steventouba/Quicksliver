json.extract! @user, :id, :username, :email, :phone_number

json.channels do 
  @user.subscribed_channels.each do |channel| 
    json.set! channel.id do 
      json.extract! channel, :id, :name, :creator_id, :channel_type, :is_private
    end 
  end
end 

@user.channel_memberships.each do |membership|
    json.memberships do
        json.set! membership.id do
            json.extract! membership, :id, :user_id, :channel_id, :is_admin 
        end
    end
end