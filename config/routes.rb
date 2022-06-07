Rails.application.routes.draw do
  resources :recipes 
  resources :bookmarks
  resources :users do 
    resources :recipes, only: [:index, :destroy]
    resources :bookmarks, only: [:index, :destroy]
  end
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  post '/signup', to: 'users#create'
  # post '/save_recipe', to: 'recipe_saves#create'
  get '/most-bookmarks', to: 'users#most_bookmarks'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
