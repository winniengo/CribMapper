class Favorite < ApplicationRecord
  validates :user_id, :listing_id, presence: true
  validates :user_id, uniqueness: { scope: :listing_id }

  belongs_to :user
  belongs_to :listing
end
