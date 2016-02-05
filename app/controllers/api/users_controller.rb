 class Api::UsersController < ApplicationController

  def create
    if user_params[:username] == "guest"
      @user = User.create_guest_user
    else
      @user = User.new(user_params)
    end

    if @user.save
      sign_in!(@user)
      @user_with_terms = {user: @user, terms: @user.terms}
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new
  end

  def index
    @users = User.all
    @users_with_terms = []
    @users.each do |user|
      @users_with_terms << {user: user, terms: user.terms.to_a, opinions: user.opinions, opinioned_terms: user.opinioned_terms}
    end
  end

  def show
    @user = User.find(params[:id])
    @terms = @user.terms.to_a
    @user_with_terms = {user: @user, terms: @user.terms.to_a, opinions: @user.opinions, opinioned_terms: @user.opinioned_terms}
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
