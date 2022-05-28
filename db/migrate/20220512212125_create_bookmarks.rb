class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :recipe_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
