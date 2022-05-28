class RecipesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
before_action :authorize
skip_before_action :authorize, only: [:index, :show]

    def index
        if params[:user_id] && user = User.find(params[:user_id])
            render json: user.bookmarked_recipes, status: :ok
        else
            render json: Recipe.all, status: :ok
        end
    end

    def show
        render json: Recipe.find(params[:id])
    end

    def create
        recipe = Recipe.create(recipe_params)
        
        if recipe.valid?
            user_id = session[:user_id]
            Bookmark.create(recipe_id: recipe[:id], user_id: user_id)
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

    def destroy
        user = User.find(session[:user_id])
        if user.id == 1
            recipe = Recipe.find(params[:id])
            recipe.destroy
        else
            user_recipe = user.recipe_saves.find_by(recipe_id: params[:id])
            render json: user_recipe.destroy
        end
    end

    def favorites
        byebug
        render json: Recipe.first
    end


    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def recipe_params
        params.permit(:name, :instructions, :time_to_make, :vegetarian)
    end

    def not_found
        render json: {error: 'No recipe with that id'}, status: :not_found
    end

end
