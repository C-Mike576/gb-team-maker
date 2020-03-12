Rails.application.routes.draw do
  resources :users
  resources :players, only: [:show, :index]
end
