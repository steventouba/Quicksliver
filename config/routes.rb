Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users do 
      resources :channels, only: [:index, :show]
    end 
    resources :channels, only: [:index, :create, :edit, :delete] do 
      resources :messages, only: [:index]
    end 
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:post, :delete, :patch]
  end 


  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
