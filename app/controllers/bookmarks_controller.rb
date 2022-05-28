class BookmarksController < ApplicationController

    def create
        # TO DO: make sure you can't create duplicate recipes associations
        if Bookmark.find_by(bookmark_params)
            render json: {error: 'Recipe already bookmarked'}, status: :unprocessable_entity
        else
            render json: Bookmark.create(bookmark_params), status: :created
        end
    end

    def show
        byebug
        user = User.find(params[:user_id])
        user.bookmarks.find(params[:id])
    end

    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            render json: user.bookmarks
        else
            render json: Bookmark.all
        end
    end

    def user_index
        user = User.find(params[:user_id])
        render json: user.recipes, status: :ok
    end

    def destroy
        user = User.find(params[:user_id])
        bookmark = user.bookmarks.find_by(recipe_id: params[:id])
        bookmark.destroy
    end


    private

    def bookmark_params
        params.permit(:user_id, :recipe_id)
    end

end
