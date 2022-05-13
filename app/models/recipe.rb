class Recipe < ActiveRecord::Base
    has_many :user_recipes, :dependent => :destroy
    has_many :users, through: :user_recipes
    validates :name, presence: true
    validates :instructions, presence: true
end