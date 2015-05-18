class SessionsController < ApplicationController
  def index
  end

  def search
    location = params[:location].split
    location_search = location.join("+")
    parameters = { term: params[:term], sort: 2, limit: 15 }
    initial_search = Yelp.client.search(location_search, parameters)
    @results= initial_search.businesses
    # render json: @results
    respond_to do |format|
      format.html { render :search }
      format.json { render json: @results }
    end
  end

  def create
    # binding.pry
    @user = User.from_auth( request.env["omniauth.auth"] )
    session[:user_id] = @user.id
    redirect_to "/"
  end

  def destroy
    session.clear
    redirect_to "/"
  end
end
