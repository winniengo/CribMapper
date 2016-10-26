class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :listing_id, null: false
      t.string :source, null: false

      t.timestamps
    end

    add_index :images, :listing_id
  end
end
