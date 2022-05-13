Rails.application.routes.draw do
  resources :user_recipes
  resources :recipes
  resources :users
  post '/login', to: 'sessions#create'
end
