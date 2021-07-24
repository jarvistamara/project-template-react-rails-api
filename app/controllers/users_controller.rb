class UsersController < ApplicationController

#  SIGNUP - FRONTEND
    def create
        # byebug
        # get the user information from the STRONG PARAMS
        user = User.create!(user_params)

        # .valid? runs validations in your user model
        if user.valid?
            # this is the exact moment of login
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

#   IDENTIFY LOGGED IN USER
    def show
        # Looks for a user in the session
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end
end
   