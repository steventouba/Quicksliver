Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users do 
      resources :channels, only: [:index, :show]
      resources :channelmemberships, only: [:index]
    end 
    resources :channels, only: [:index, :create, :edit, :delete] do 
      resources :messages, only: [:index]
    end 
    resources :messages, only: [:post, :delete, :patch]
    resource :session, only: [:create, :destroy]
  end 

  mount ActionCable.server, at: '/cable'
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
