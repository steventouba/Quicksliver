class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in? 

  def current_user
    #check for session token before searching db 
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session: session[:session_token])
  end 

  def login!(user) 
    #initialize current_user 
    @current_user = user 

    #Set session token to current user session token 
    session[:session_token] = user.session_token
  end 

  def logout!
    #scramble current users session_token use try incase user mashes logout 
    current_user.try(:reset_session_token!)
    session[:session_token] = nil 
  end 

  def logged_in? 
    !!current_user
  end 

  def require_logged_out
    #prevent logged-in users from seeing certain pages 
    redirect_to user_url(current_user) if logged_in? 
  end 

  def require_logged_in 
    #prevent logged-out users from seeing certain pages 
    redirect_to new_session_url unless logged_in? 
  end 
end
