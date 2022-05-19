class UserRecipesController < ApplicationController

    def create
        # TO DO: make sure you can't create duplicate recipes associations
       render json: UserRecipe.create(user_id: params[:user_id], recipe_id: params[:recipe_id]), status: :created
    end

    def user_index
        user = User.find(params[:user_id])
        render json: user.recipes, status: :ok
    end
end
