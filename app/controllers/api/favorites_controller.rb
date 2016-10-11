class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(
      user_id: current_user.id,
      listing_id: params[:listing_id]
    )

    if @favorite.save
      render "api/favorites/show", status: 200
    else
      @errors = @favorite.errors.full_messages
			render "api/shared/errors", status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(
      user_id: current_user.id,
      listing_id: params[:listing_id]
    )

    if @favorite.destroy
      render "api/favorites/show", status: 200
    else
      @errors = favorite.errors.full_messages
			render "api/shared/errors", status: 422
    end
  end

  def show # TODO remove action
    @favorite = Favorite.find(params[:id])
  end
end
