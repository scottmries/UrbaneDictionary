class Api::SessionsController < ApplicationController

  def show

    if current_user
      @user = current_user
      @user_with_terms = {user: @user, terms: @user.terms}
      render "api/users/show"
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user.nil?
      render json: ["Wrong email/password combo!"], status: 401
    else
      sign_in!(@user)
      @user_with_terms = {user: @user, terms: @user.terms}
      render "api/users/show"
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
