class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render "api/shared/errors", status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render 'api/users/show'
  end

  def favorites
    @listings = User.find(params[:id]).favorite_listings.includes(:images)
    render 'api/shared/listings'
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :lat, :lng, :place_id, :address)
  end
end
