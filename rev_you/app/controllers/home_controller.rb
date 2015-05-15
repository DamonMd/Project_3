
class HomeController < ApplicationController
  def index
  end

  def search
    location = params[:location].split
    location_search = location.join("+")
    parameters = { term: params[:term], sort: 2, limit: 7 }
    initial_search = Yelp.client.search(location_search, parameters)
    @results= initial_search.businesses
    # render json: @results
    respond_to do |format|
      format.html { render :search }
      format.json { render json: @results }
    end
  end


end
