class SessionsController < ApplicationController
  def index
  end

  def create
    # raise request.env["omniauth.auth"]
    @user = User.from_auth( request.env["omniauth.auth"] )
    session[:user_id] = @user.id
    redirect_to "/"
  end

  def destroy
    session.clear
    redirect_to "/"
  end
end
