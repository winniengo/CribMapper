class Api::ListingsController < ApplicationController
  def index
    if filters_params
      @listings = Listing.filter(filters_params) # by bounds and rent
      @listings = Listing.filter_by_attr(@listings, :bedrooms, query_string(:bedrooms)) unless default_params(:bedrooms)
      @listings = Listing.filter_by_attr(@listings, :bathrooms, query_string(:bathrooms)) unless default_params(:bathrooms)
      @listings = Listing.filter_by_attr(@listings, :listing_type, query_string(:listingType)) unless default_params(:listingType)
    else
      @listings = Listing.all
    end
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

  def filters_params
    params[:filters]
  end

  def default_params(attr)
    filters_params[attr].keys.all? { |key| filters_params[attr][key] == 'false' }
  end

  def query_string(attr)
    "('#{filters_params[attr].keys.select { |key| filters_params[attr][key] == 'true' }.join("', '")}')"
  end

end
