class Image < ApplicationRecord
  validates :listing_id, :src, presence: true

  belongs_to :listing
end
