class Api::ChannelsController < ApplicationController

  def index 
    if params[:userId]
     @channels = current_user.subscribed_channels
    else 
      @channels = Channel.all
    end 
    render :index
  end 

  def show  
    @channel = current_user.subscribed_channels.find_by(id: params[:channel][:id])
    if @channel
      render :show 
    else 
      render json: ['could not locate user'], status: 404 
    end 
  end

  def create 
    @channel = Channel.new(channel_params)
    if @channel.save 
      render '/api/channels/show'
    else
      render json: ['something went wrong'], status: 401
    end 
  end 

  def destroy 
    @channel = channel.find_by(id: params[:id])
    if @channel 
      @channel.destroy
   else 
    render json: ['unathorized'], status: 404 
   end 
  end 

end

