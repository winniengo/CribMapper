Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:index, :show, :create]
    resources :users, only: [:create, :show, :update]
    get 'users/:id/favorites' => 'users#favorites', :as => :user_favorites
    resource :favorites, only: [:create, :destroy]
    resources :favorites, only: [:show]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
