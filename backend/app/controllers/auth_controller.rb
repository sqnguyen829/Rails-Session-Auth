class AuthController < ApplicationController
    
    def create
        #looks for the user by the username
        user = User.find_by(username:params[:username])
        #checks if the user object was found and then checks if the typied password matches the password of the user object
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {username:user.username, id:user.id, age:user.age}
        else
            render json: {error:'Failed login'}
        end
    end

    #this method will run first thing when the page renders thanks to the useEffect that was set up in App.js
    def check_loggin
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: {username:user.username, id:user.id, age:user.age}
        else
            render json: {error:'No one is logged in'}
        end
    end

    #simple method to remove session
    def logout
        session[:user_id] = nil
        render json: {error:'Logged out'}
    end
end
