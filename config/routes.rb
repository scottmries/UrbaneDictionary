Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session
  get 'auth/facebook/callback', to: 'sessions#omniauth_facebook'

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :terms
    get "search", to: "utils#search"
  end
end
