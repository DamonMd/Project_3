
class HomeController < ApplicationController
  def index
  end

  def search
    location = params[:location]
    parameters = { term: params[:term], limit: 1 }
    @results = Yelp.client.search(location, parameters)
    render json: @results
    # respond_to do |format|
    #   format.html { render :index }
    #   format.json { render json: @results }
    # end
  end


end
