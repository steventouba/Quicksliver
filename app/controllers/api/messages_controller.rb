class Api::MessagesController < ApplicationController

  def index 
    @messages = Message.all
    render :index
  end 
end
