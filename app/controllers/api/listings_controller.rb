class Api::ListingsController < ApplicationController
  def index
    if filters_params
      @listings = Listing.includes(:images).filter(filters_params) # filter by bounds and rent

      filter_by_rooms(:bedrooms, "5")
      filter_by_rooms(:bathrooms, "4")

      @listings = Listing.filter_by_attr(@listings, :listing_type, query_string(:listingType)) unless default_params(:listingType)

      @listings = Listing.filter_by_pets(@listings, filters_params[:pets]) unless default_params(:pets)

      @listings = Listing.filter_by_selected(@listings, :fee) if filters_params[:advanced][:noFee] == "true"
      @listings = Listing.filter_by_selected(@listings, :parking) if filters_params[:advanced][:parking] == "true"
    else
      @listings = Listing.includes(:images).all
    end
  end

  def show
    @listing = Listing.includes(:images).find(params[:id])
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

  def filter_by_rooms(attr, max)
    attr_default = default_params(attr)
    attr_max = filters_params[attr][max] == "true"

    if attr_max && !attr_default
      @listings = Listing.filter_by_max_and_attr(@listings, attr, max, query_string(attr))
    elsif !attr_default
      @listings = Listing.filter_by_attr(@listings, attr, query_string(attr))
    elsif attr_max
      @listings = Listing.filter_by_max(@listings, attr, max)
    end
  end

end
