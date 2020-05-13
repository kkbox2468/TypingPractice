Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/typearea', to: "typing#area"
  root to: 'rooms#index'

  resources :rooms
end
