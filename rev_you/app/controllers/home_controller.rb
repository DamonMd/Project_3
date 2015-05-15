
class HomeController < ApplicationController
  def index
  end

  # NEED TO MOVE THE BELOW FUNCTIONALITY TO SESSIONS CONTROLLER
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


end
