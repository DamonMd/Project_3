class FavoritesController < ApplicationController

  def create
    Rails.logger.info(params)
    @favorite = Favorite.create(favorite_params)
    render json: @favorite
  end

  def favorite_params
    return params[:favorite].permit(:user_id, :name)
  end


end
