@channels.each do |channel| 
  channel.set! channel.id do 
    json.extract! channel, :id, :name, :creator_id: :channel_type, :id_private
  end 
end 