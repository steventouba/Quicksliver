class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    #debugger 
    stream_for "room-#{params["room"]}:messages"
  end

  def speak(data) 
    debugger
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChatChannel.broadcast_to("room-#{params["room"]}:messages", socket )
  end 
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
