class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      render json: user
    else
      render json: "Invalid username or password"
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end
end
