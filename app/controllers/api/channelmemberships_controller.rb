class Api::ChannelmembershipsController < ApplicationController

  def index 
    @memberships = selected_user.channel_memberships
    render :index 
  end 

  
 private 
  def selected_user
    User.find_by(id: params[:user_id])
  end 
end