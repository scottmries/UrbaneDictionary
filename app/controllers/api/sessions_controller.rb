class Api::SessionsController < ApplicationController

  def show

    if current_user
      @user = current_user
      @user_with_terms = {user: @user, terms: @user.terms, opinions: @user.opinions, opinioned_terms: @user.opinioned_terms}
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
      @user_with_terms = {user: @user, terms: @user.terms, opinions: @user.opinions, opinioned_terms: @user.opinioned_terms}
      byebug
      render "api/users/show"
    end
  end

  def omniauth_facebook
    @user = User.find_or_create_by_auth_hash(auth_hash)
    sign_in!(@user)
    redirect_to root_url + '#/'
  end

  def omniauth_twitter
    @user = User.find_or_create_by_auth_hash(auth_hash)
    sign_in!(@user)
    redirect_to root_url + '#/'
  end

  def destroy
    sign_out
    render json: {}
  end
end

def auth_hash
  request.env['omniauth.auth']
end
