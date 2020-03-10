Rails.application.routes.draw do
  resources :players, only: [:show, :index]
end
