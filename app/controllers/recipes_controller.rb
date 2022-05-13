class RecipesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
    def index
        render json: Recipe.all
    end

    def show
        render json: Recipe.find(params[:id])
    end

    def create
        recipe = Recipe.create(recipe_params)
        if recipe.valid?
        render json: recipe, status: :created
        else
            render json: {errors: recipe.errors}, status: :unprocessable_entity
        end
    end

    def update
        recipe = Recipe.find(params[:id])
        recipe.update(recipe_params)
        render json: recipe, status: :accepted
    end


    private
    def recipe_params
        params.permit(:name, :instructions, :time_to_make, :vegetarian)
    end

    def not_found
        render json: {error: 'No recipe with that id'}, status: :not_found
    end

end
