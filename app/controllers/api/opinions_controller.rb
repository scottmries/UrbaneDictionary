class Api::OpinionsController < ApplicationController
  def opine
    opinion = Opinion.find(params[:id])

    if opinion
      if opinion.update(opinion_params)
        redirect_to 'api/terms/show' + opinion_params[:term_id]
      end
    else
      if opinion.save(opinion_params)
        redirect_to 'api/terms/show' + opinion_params[:term_id]
      end
    end
    render json: @opinion.errors.full_messages, status: 422
  end
  
  def create
    @opinion = Opinion.create(opinion_params)
    if @opinion.save
      redirect_to 'api/terms/show' + opinion_params[:term_id]
    else
      render json: @opinion.errors.full_messages, status: 422
    end
  end

  def update
    @opinion = Opinion.find(params[:id])
    if @opinion.update(opinion_params)
      redirect_to 'api/terms/show/' + opinion_params[:term_id]
    else
      render @opinion.errors.full_messages, status: 422
    end
  end

  private

  def opinion_params
    params.require(:opinion).permit(:user_id, :term_id, :liked)
end
