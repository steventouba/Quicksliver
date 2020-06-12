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
    @channel = Channel.new(channel_params)
    if @channel.channel_type == 1
      structure_channel_name(params[:channel][:name])
    end 
    if @channel.save
      ChannelMembership.create({user_id: @channel.creator_id, channel_id: @channel.id, is_admin: true})
      if @users 
        enroll_users(@users)
      end 
      render '/api/channels/show'
    else
      render json: ['can\'t have two channels with the same name'], status: 401
    end 
  end 

  def destroy 
    @channel = Channel.find_by(id: params[:id])
    if @channel 
      @channel.destroy
      render :show
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

  def structure_channel_name(user_ids) 
    @users = user_ids.values.sort!
    prefix = @users.join.hash.to_s
    @users.each { |user| prefix << ".#{user}"}
    @channel.name = prefix
  end 

  def enroll_users(users) 
    users.each do |user| 
      ChannelMembership.create({user_id: user, channel_id: @channel.id, is_admin: true})
    end
  end 

end

