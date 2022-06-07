class User < ActiveRecord::Base
    has_secure_password
    validates :username, uniqueness: true, presence: true
    has_many :recipes, :dependent => :destroy
    has_many :bookmarks, :dependent => :destroy
    has_many :bookmarked_recipes, through: :bookmarks, source: :recipe

    def self.most_bookmarks
        self.joins(:bookmarks).group('users.id').order('COUNT(bookmarks.id) desc').limit(1)
    end

end

