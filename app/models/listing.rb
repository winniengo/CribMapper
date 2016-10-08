class Listing < ApplicationRecord
  validates :address, presence: true, uniqueness: true
  validates :lat, :lng, :rent, :bedrooms, :bathrooms, presence: true
  validates :description, :listing_type, presence: true

  validates :lat, :lng, :rent, :bathrooms, numericality: true
  validates :bedrooms, numericality: { only_integer: true }

  validates :listing_type, inclusion: { in: ['lease', 'sublet'] }

  validates :lat, uniqueness: { scope: :lng }

  def self.filter(filters)
    self.where("lat < ?", filters[:bounds][:northEast][:lat])
        .where("lat > ?", filters[:bounds][:southWest][:lat])
        .where("lng < ?", filters[:bounds][:northEast][:lng])
        .where("lng > ?", filters[:bounds][:southWest][:lng])
        .where("rent <= ?", filters[:rent][:max])
        .where("rent >= ?", filters[:rent][:min])
  end

  def self.filter_by_attr(listings, attr, params)
    listings.where("#{attr} IN #{params}")
  end

  def self.filter_with_max(listings, attr, max)
    listings.or(self.where("#{attr} >= ?", max))
  end
end
