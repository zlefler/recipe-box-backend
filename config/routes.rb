Rails.application.routes.draw do

  # TO DO: Remove unnecessary routes 
  resources :user_recipes
  resources :recipes
  resources :users
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  post '/signup', to: 'users#create'
end
