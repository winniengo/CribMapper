class Api::FavoritesController < ApplicationController
  # def index
  #   # @listings = User.find(params[:user_id]).includes(:favorite_listings).favorite_listings
  #   @listings = User.includes(:favorite_listings).find(params[:user_id]).favorite_listings
  # end

  def create
    @favorite = Favorite.create!(favorite_params)
    if @favorite.save!
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(favorite_params)
    @favorite.destroy
    render :show
  end

  private

  def favorite_params
    {user_id: params[:userId], listing_id: params[:listingId]}
  end
end
