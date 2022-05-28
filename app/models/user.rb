class User < ActiveRecord::Base
    has_secure_password
    has_many :recipes, :dependent => :destroy
    has_many :bookmarks, :dependent => :destroy
    has_many :bookmarked_recipes, through: :bookmarks, source: :recipe
end

