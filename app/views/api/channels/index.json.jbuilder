@channels.each do |channel| 
  json.set! channel.id do 
    json.extract! channel, :id, :name, :creator_id, :channel_type, :is_private
  end 
end 