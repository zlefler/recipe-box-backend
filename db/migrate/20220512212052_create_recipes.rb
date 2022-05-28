class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :instructions
      t.integer :time_to_make
      t.boolean :vegetarian
      t.integer :user_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
