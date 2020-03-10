Rails.application.routes.draw do
  resources :players
  get '/test', to: 'application#test'
end
