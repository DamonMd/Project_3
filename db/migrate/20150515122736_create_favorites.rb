class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.string :name
      t.string :location
      t.integer :user_id
      t.string :email
      t.string :image
      t.string :url
    end
  end
end
