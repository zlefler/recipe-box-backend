class RecipesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
# before_action :authorize
# skip_before_action :authorize, only: [:index, :show]

    def index
        if params[:user_id] && user = User.find(params[:user_id])
            logger.info('yes user')
            render json: user.recipes, status: :ok
        else
            logger.info('no user')
            render json: Recipe.all, status: :ok
        end
    end

    def show
        render json: Recipe.find(params[:id])
    end

    def create
        recipe = Recipe.create(
            name: params[:name],
            instructions:params[:instructions],
            time_to_make:params[:time_to_make],
            vegetarian: params[:vegetarian])
        
        # if recipe.valid?
        user_id = session[:user_id]
        UserRecipe.create(recipe_id: recipe[:id], user_id: user_id)
        render json: recipe, status: :created
        # else
        #     render json: {errors: recipe.errors}, status: :unprocessable_entity
        # end
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
            
            recipe = user.user_recipes.find_by(recipe_id: params[:id])
            render json: recipe.destroy
        end
    end


    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    # def recipe_params
    #     params.permit(:name, :instructions, :time_to_make, :vegetarian)
    # end

    def not_found
        render json: {error: 'No recipe with that id'}, status: :not_found
    end

end
