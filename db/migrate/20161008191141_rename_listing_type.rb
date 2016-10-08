class RenameListingType < ActiveRecord::Migration[5.0]
  def change
    rename_column :listings, :listing_type, :type
  end
end
