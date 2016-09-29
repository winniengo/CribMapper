class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.float :rent, null: false
      t.float :bathrooms, null: false
      t.integer :bedrooms, null: false
      t.string :description, null: false
      t.string :listing_type, null: false

      t.timestamps
    end

    add_index :listings, :address, unique: true
    add_index :listings, [:lat, :lng], unique: true
  end
end
