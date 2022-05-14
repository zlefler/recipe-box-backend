class UserRecipesController < ApplicationController

    def create
       render json: UserRecipe.create(user_id: params[:user_id], recipe_id: params[:recipe_id]), status: :created
    end

end
