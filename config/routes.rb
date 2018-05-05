Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get '/login_employee/', to: 'employees#active_employee'
    get '/validate_invitation/:token', to: 'invitations#validate_invite'
    resources :employees 
    resources :departments do 
      resources :jobs
    end 
    resources :hotels do 
    end 
     
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
