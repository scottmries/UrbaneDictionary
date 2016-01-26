class UsersController < ApplicationController

  def create
    
    if user_params[:username] == "guest"
      @user = User.create_guest_user
    else
      @user = User.new(user_params)
    end

    if @user.save
      sign_in(@user)
      # redirect_to terms_url
      render json: @user
    else
      flash.now[:errors] = @user.errors.full_message
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
