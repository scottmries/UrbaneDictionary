Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session
  get 'auth/facebook/callback', to: 'sessions#omniauth_facebook'
  get 'auth/twitter/callback', to: 'sessions#omniauth_twitter'

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :terms
    # resources :opinions, only: [:create, :destroy, :show]
    get "search", to: "utils#search"
    post "opine", to: "opinions#opine"
  end
end
