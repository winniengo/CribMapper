class Listing < ApplicationRecord
  validates :address, true, uniqueness: true
  validates :lat, :lng, :rent, :bedrooms, :bathrooms, presence: true
  validates :description, :listing_type, presence: true

  validates :lat, :lng, :rent, :bathrooms, numericality: true
  validates :bedrooms, numericality: { only_integer: true }

  validates :listing_type, inclusion: { in: ['lease', 'sublet'] }

  validates :lat, uniqueness: { scope: :lng }
end
