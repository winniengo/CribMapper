Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:index, :show, :create]
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:index]
    end
    resources :favorites, only: [:show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
