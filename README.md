###Generate backend and frontend folder###
rails new backend
npx create-react-app frontend

remove git from both folders, make sure to cd into both and type the next line

rm -rf .git

Backend-setup


add these gems to the gemfile

gem 'bcrypt', '~> 3.1.7'

gem "jwt","~> 2.1"

gem 'rack-cors'


bundle install

add models you plan on using, cd into backend

rails g model User username password_digest age:integer

rails g model Dog name breed user_id:integer

add relationship to model

add seed info

add user and dog controllers

brew install yarn

rails webpacker:install

create the controllers

rails g controller users

rails g controller dogs

rails g controller auth

Added all the index for users and dogs controller

Added a create method for the auth controller with a byebug in it, along with the route
Will come back to this later.

Moved to the frontend cleared out the code in the App.js file


We'll start making a few components to simulate logging in
Component build order

App

Home

Login

Loggedin


The main thing that to makes this work will the the loginHere function in the Login.js, the fetch should be able to hit the controller method we have put the byebug in. Test it.

Errors running into

login:1 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
Solve this by putting skip_before_action :verify_authenticity_token in the application controller


In config/application.rb add these line of code

############################################################################################################

config.session_store :cookie_store, key: '_session', same_site: :strict


config.middleware.insert_before 0, Rack::Cors do

    allow do

        origins 'http://localhost:3000', 'http://localhost:3001'

        resource '*', headers: :any, methods: [:get, :post, :patch, :delete], credentials: true

    end

end

config.api_only = false

############################################################################################################


config.session_store :cookie_store, key: '_session', same_site: :strict

The code above allows cookies to persist and be used, and same_site is restricting the usage to only the oringins we allow.
