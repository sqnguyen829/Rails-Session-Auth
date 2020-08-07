class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, include: :user
    end
    
end
