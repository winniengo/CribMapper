class AddPlaceToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :place_id, :string
    add_column :users, :address, :string
  end
end
