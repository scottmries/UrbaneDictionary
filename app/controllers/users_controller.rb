class UsersController < ApplicationController
  def create
    if user_params[:username] == "guest"
      @user = User.create_guest_user
    else
      @user = User.new(user_params)
    end

    if @user.save
      sign_in!(@user)
      # render json: user
      render "api/terms/index"
      # redirect_to terms_url
      # render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new
  end

  def index
    @user = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
