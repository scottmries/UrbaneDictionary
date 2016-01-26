Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :new]
    resources :sessions, only: [:create, :new, :destroy]
    resources :terms
  end
end
