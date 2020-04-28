class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params) 
    if @user.save 
      login!(@user) 
      render :show
    else 
      render json: @user.errors.full_messages, status: 401
    end 
  end 

  def update 
    @user = selected_user
    #update returns false 
    if @user && @user.update(user_params)
      render :show 
    elsif !@user 
      render json:  ['could not locate user'], status: 404
    else
      render json: @user.errors.full_messages, status: 401 
    end 
  end 

  def show 
    @user = selected_user
  end 

  def index 
    @users = User.all 
  end 

  def destroy 
    @user = selected_user 
    if @user 
      @user.destroy
      render :show 
    else
      render  ['could not locate user'], status: 404 
    end 
  end 

  private 

  def selected_user 
    User.find(params[:id])
  end 

  def user_params
    params.require(:user).permit(:username, :email, :password, :phone_number)
  end 
end
