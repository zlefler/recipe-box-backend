class Recipe < ActiveRecord::Base
    has_many :saved_recipes, :dependent => :destroy
    has_many :users, through: :saved_recipes
    belongs_to :user
    validates :name, presence: true
    validates :instructions, presence: true
end
