json.extract! @user, :id, :username, :email, :phone_number

json.channels do 
  @user.subscribed_channels.each do |channel| 
    channel.set! channel.id do 
      json.extract! @channel, :id, :name, :creator_id: :channel_type, :id_private
    end 
  end
end 