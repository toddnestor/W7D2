Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :todo_items, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:index, :destroy, :create]
    end

    resources :steps, only: [:update]
  end

  root to: "static_pages#root"
end
