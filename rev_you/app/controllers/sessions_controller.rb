class SessionsController < ApplicationController
  def create
    raise request.env["omniauth.auth"]
  end
end
