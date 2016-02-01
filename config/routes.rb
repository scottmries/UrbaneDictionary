Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :terms
  end
end
