class Api::SessionsController < ApplicationController
  # before_action :require_logged_in, only: [:destroy]

  def create
    @user = User.find_user_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )
  
    if @user.nil? 
      render json: ['Invalid email or password'], status: 401
    else 
      login!(@user) 
      render 'api/users/show'
    end 
  end 

  def destroy 
    if current_user  
      logout!
      render json: ['Logout successful.']
    else 
      render json: ['no user to logut'], status: 404
    end 
  end 
end
