class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :provider
      t.string :uid
      t.string :email
      t.string :image
      t.string :url
      t.string :gender
    end
  end
end
