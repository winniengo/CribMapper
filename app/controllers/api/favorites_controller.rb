class Api::FavoritesController < ApplicationController
  def index
    # @listings = User.find(params[:user_id]).includes(:favorite_listings).favorite_listings
    @listings = User.includes(:favorite_listings).find(params[:user_id]).favorite_listings
  end

  def create
    @favorite = Favortie.create!(favorite_params)

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render :show
  end

  def show
    @listing = Favorite.includes(:listing).find(params[:id]).listing
  end

  private

  def favorite_params
    params.require(:favorite).permit(
      :user_id,
      :listing_id
    )
  end
end
