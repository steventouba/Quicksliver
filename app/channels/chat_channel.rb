class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak 
    
  end 
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
