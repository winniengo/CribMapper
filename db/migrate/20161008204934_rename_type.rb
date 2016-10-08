class RenameType < ActiveRecord::Migration[5.0]
  def change
    rename_column :listings, :type, :listing_type
  end
end
