class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :bookmarks, :dependent => :destroy
    has_many :users, through: :bookmarks
    validates :name, presence: true
    validates :instructions, presence: true
end
