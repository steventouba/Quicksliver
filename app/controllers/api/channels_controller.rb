class Api::ChannelsController < ApplicationController

  def index 
    if params[:user_id] != 'undefined'
     @channels = selected_user.subscribed_channels
    else 
      @channels = Channel.all
    end 
    render :index
  end 

  def show  
    @channel = selected_user.subscribed_channels.find_by(id: params[:channel][:id])
    if @channel
      render :show 
    else 
      render json: ['could not locate channel'], status: 404 
    end 
  end

  def create 
    debugger 
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

  private 

  def channel_params 
    params.require(:channel).permit(:name, :creator_id, :is_private, :channel_type)
  end 

  def selected_user
    User.find_by(id: params[:user_id])
  end 
end

