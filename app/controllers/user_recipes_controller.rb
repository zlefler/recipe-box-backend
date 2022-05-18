class UserRecipesController < ApplicationController

    def create
        # TO DO: make sure you can't create duplicate recipes associations
       render json: UserRecipe.create(user_id: params[:user_id], recipe_id: params[:recipe_id]), status: :created
    end

    def user_index
        user = User.find_by(id: session[:user_id])
        render json: user.recipes, status: :ok
    end

    def destroy
        byebug
        user = User.find_by(id: session[:user_id])
        recipe = user.user_recipes.find(params[:id])
        render json: recipe.destroy
    end


end
