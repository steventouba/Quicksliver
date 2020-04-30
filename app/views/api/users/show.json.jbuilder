json.extract! @user, :id, :username, :email, :phone_number

json.channels do 
  @user.subscribed_channels.each do |channel| 
    json.set! channel.id do 
      json.extract! channel, :id, :name, :creator_id, :channel_type, :is_private
    end 
  end
end 