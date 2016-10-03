class Api::ListingsController < ApplicationController
  def index
    @listings = filter_params ? Listing.filter(filter_params) : Listing.all
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    listing = Listing.create!(listing_params)

    if listing.save
      render :show
    else
      render json: listing.errors.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :address,
      :lat,
      :lng,
      :rent,
      :bedrooms,
      :bathrooms,
      :description,
      :listing_type,
    )
  end

  def filter_params
    params[:filters]
  end
end
