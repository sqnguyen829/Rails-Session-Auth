class AuthController < ApplicationController
    # skip_before_action :check_authentication, only: [:create]
    
    def create
        #looks for the user by the username
        user = User.find_by(username:params[:username])
        #checks if the user object was found and then checks if the typied password matches the password of the user object
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            byebug
            render json: {username:user.username, id:user.id, age:user.age}
        else
            render json: {error:'Failed login'}
        end
    end

    def check_loggin
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: {username:user.username, id:user.id, age:user.age}
        else
            render json: {error:'No one is logged in'}
        end
    end

    def logout
        session[:user_id] = nil
        render json: {error:'Logged out'}
    end
end
