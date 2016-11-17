class Listing < ApplicationRecord
  validates :address, presence: true, uniqueness: true
  validates :lat, :lng, :rent, :bedrooms, :bathrooms, presence: true
  validates :description, :listing_type, presence: true

  validates :lat, :lng, :rent, :bathrooms, numericality: true
  validates :bedrooms, numericality: { only_integer: true }

  validates :listing_type, inclusion: { in: ['lease', 'sublet'] }
  validates :fee, :parking, :cats, :dogs, inclusion: { in: [true, false] }

  validates :lat, uniqueness: { scope: :lng }

  has_many :images, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :users_favorited,
    through: :favorites,
    source: :user

  def self.filter(params)
    self.where("lat < ?", params[:bounds][:northEast][:lat])
        .where("lat > ?", params[:bounds][:southWest][:lat])
        .where("lng < ?", params[:bounds][:northEast][:lng])
        .where("lng > ?", params[:bounds][:southWest][:lng])
        .where("rent <= ?", params[:rent][:max])
        .where("rent >= ?", params[:rent][:min])
  end

  def self.filter_by_attr(listings, attr, params)
    listings.where("#{attr} IN #{params}")
  end

  # def self.filter_with_max(listings, attr, max, other_params)
  #   debugger
  #   other_params ?
  #     listings.or(self.where("#{attr} >= ?", max)) :
  #     listings.where("#{attr} >= ?", max)
  # end

  def self.filter_by_max_and_attr(listings, attr, max, params)
    listings.where("#{attr} IN #{params} OR #{attr} >= #{max}")
  end

  def self.filter_by_max(listings, attr, max)
    listings.where("#{attr} >= #{max}")
  end


  # def self.filter_by_listing_type(listings, params)
  #   listings.where("listing_type IN #{params}")
  # end

  def self.filter_by_pets(listings, params)
    op = params.keys.all? { |key| params[key] == "true"} ? "AND" : "OR"
    listings.where("cats IS #{params[:cats]} #{op} dogs IS #{params[:dogs]}")
  end

  def self.filter_by_selected(listings, attr)
    attr == :fee ? listings.where("fee IS false") : listings.where("parking IS true")
  end
end
