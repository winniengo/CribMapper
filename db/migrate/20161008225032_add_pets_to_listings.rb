class AddPetsToListings < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :fee, :boolean, default: false
    add_column :listings, :parking, :boolean, default: false
    add_column :listings, :cats, :boolean, default: false
    add_column :listings, :dogs, :boolean, default: false
  end
end
