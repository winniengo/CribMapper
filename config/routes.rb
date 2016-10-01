Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create]
  end

  root "static_pages#root"
end
