Rails.application.routes.draw do

  # TO DO: Remove unnecessary routes 
  resources :recipes 
  resources :users do 
    resources :recipes, only: [:index]
  end
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  post '/signup', to: 'users#create'
  post '/save_recipe', to: 'user_recipes#create'
  post '/user_recipes', to: 'user_recipes#user_index'
  delete '/user_recipes/:id', to: 'user_recipes#destroy'
end
