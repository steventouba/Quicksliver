class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    #debugger 
    stream_for "room-#{params["room"]}:messages"
  end

  def speak(data) 
    #debugger
    message = Message.create(author_id: 1, body: data['message']['body'], channel_id: data['message']['channelId'])
    socket = { message: {authorId: message.author_id, body: message.body, channelId: message.channel_id}}
    ChatChannel.broadcast_to("room-#{params["room"]}:messages", socket )
  end 
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
