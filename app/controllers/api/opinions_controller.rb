class Api::OpinionsController < ApplicationController
  def opine
    user_id = opinion_params[:user_id].to_i
    term_id = opinion_params[:term_id].to_i
    liked = nil
    liked = true if opinion_params[:liked] == "true"
    liked = false if opinion_params[:liked] == "false"
    options = {term_id: term_id, user_id: user_id, liked: liked}
    opinion = Opinion.find_by_user_id_and_term_id(user_id, term_id)
    if opinion
      if opinion.update(options)
        @term = Term.find(term_id)
        render '/api/terms/show'
      else
        render json: opinion.errors.full_messages, status: 422
      end
    else
      opinion = Opinion.new(options)
      if opinion.save(opinion_params)
        @term = Term.find(term_id)
        render '/api/terms/show'
      else
        render json: opinion.errors.full_messages, status: 422
      end
    end
  end

  # def create
  #   @opinion = Opinion.create(opinion_params)
  #   if @opinion.save
  #     redirect_to '/api/terms/show' + opinion_params[:term_id]
  #   else
  #     render json: @opinion.errors.full_messages, status: 422
  #   end
  # end
  #
  # def update
  #   @opinion = Opinion.find(params[:id])
  #   if @opinion.update(opinion_params)
  #     redirect_to '/api/terms/show/' + opinion_params[:term_id]
  #   else
  #     render @opinion.errors.full_messages, status: 422
  #   end
  # end

  private

  def opinion_params
    params.require(:opinion).permit(:user_id, :term_id, :liked)
  end
end
