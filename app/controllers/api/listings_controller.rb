class Api::ListingsController < ApplicationController
  def index
    if filters_params
      @listings = Listing.filter(filters_params) # filter by bounds and rent

      @listings = Listing.filter_by_attr(@listings, :bedrooms, query_string(:bedrooms)) unless default_params(:bedrooms)
      @listings = Listing.filter_by_attr(@listings, :bathrooms, query_string(:bathrooms)) unless default_params(:bathrooms)
      @listings = Listing.filter_by_attr(@listings, :listing_type, query_string(:listingType)) unless default_params(:listingType)

      @listings = Listing.filter_with_max(@listings, :bedrooms, "5", !default_params(:bedrooms)) if filters_params[:bedrooms]["5"] == "true"
      @listings = Listing.filter_with_max(@listings, :bathrooms, "4", !default_params(:bathrooms)) if filters_params[:bathrooms]["4"] == "true"

      @listings = Listing.filter_by_pets(@listings, filters_params[:pets]) unless default_params(:pets)

      @listings = Listing.filter_by_selected(@listings, :fee) if filters_params[:noFeeSelected] == "true"
      @listings = Listing.filter_by_selected(@listings, :parking) if filters_params[:parkingSelected] == "true"

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
      :fee,
      :parking,
      :cats,
      :dogs
    )
  end

  def filters_params
    params[:filters]
  end

  def default_params(attr)
    if attr == :bedrooms || attr == :bathrooms
      filters_params[attr].keys.slice(0..-2).all? { |key| filters_params[attr][key] == 'false' }
    else
      filters_params[attr].keys.all? { |key| filters_params[attr][key] == 'false' }
    end
  end

  def query_params(attr)
    if attr == :bedrooms || attr == :bathrooms
      filters_params[attr].keys.slice(0..-2).select { |key| filters_params[attr][key] == 'true' }
    else
      filters_params[attr].keys.select { |key| filters_params[attr][key] == 'true' }
    end
  end

  def query_string(attr)
    "('#{query_params(attr).join("', '")}')"
  end

end
