class RenameSource < ActiveRecord::Migration[5.0]
  def change
    rename_column :images, :source, :src
  end
end
