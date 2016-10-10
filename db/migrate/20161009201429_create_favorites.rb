class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.timestamps
    end

    add_index :favorites, :user_id
    add_index :favorites, :listing_id
    add_index :favorites, [:user_id, :listing_id], unique: true
  end
end
