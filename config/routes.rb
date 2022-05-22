Rails.application.routes.draw do

  # TO DO: Remove unnecessary routes 
  resources :recipes 
  resources :users do 
    resources :recipes, only: [:index, :destroy]
  end
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  post '/signup', to: 'users#create'
  post '/save_recipe', to: 'user_recipes#create'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
