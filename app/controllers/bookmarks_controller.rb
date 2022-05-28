class BookmarksController < ApplicationController

    def create
        # TO DO: make sure you can't create duplicate recipes associations
       render json: Bookmark.create(user_id: params[:user_id], recipe_id: params[:recipe_id]), status: :created
    end

    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            render json: user.recipe_saves
        else
            render json: Bookmark.all
        end
    end

    def user_index
        user = User.find(params[:user_id])
        render json: user.recipes, status: :ok
    end
end
