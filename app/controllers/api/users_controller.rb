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

  def show # TODO remove action
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
