Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users
  resources :sessions
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show]
    resources :sessions, only: [:create, :destroy, :show]
    resources :terms
  end
end
