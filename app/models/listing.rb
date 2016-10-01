class Listing < ApplicationRecord
  validates :address, presence: true, uniqueness: true
  validates :lat, :lng, :rent, :bedrooms, :bathrooms, presence: true
  validates :description, :listing_type, presence: true

  validates :lat, :lng, :rent, :bathrooms, numericality: true
  validates :bedrooms, numericality: { only_integer: true }

  validates :listing_type, inclusion: { in: ['lease', 'sublet'] }

  validates :lat, uniqueness: { scope: :lng }

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng < ?", bounds[:northEast][:lng])
        .where("lng > ?", bounds[:southWest][:lng])
  end
end
