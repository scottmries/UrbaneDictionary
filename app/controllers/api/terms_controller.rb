class Api::TermsController < ApplicationController
  def new
    @term = Term.new
    render new
  end

  def create
    @term = Term.create(term_params)
    if @term.save
      render :show
    else
      render json: @term.errors.full_messages, status: 422
    end
  end

  def index
    @terms = Term.eager_load(:opinions)
    render :index
  end

  def show
    @term = Term.find(params[:id])
    render :show
  end

  def update
    @term = Term.find(params[:id])
    if @term.update(term_params)
      render :show
    else
      render @term.errors.full_messages, status: 422
    end
  end

  def destroy
    @term = Term.find(term_params[:id])
    @term.destroy
    render :show
  end

  private

  def term_params
    params.require(:term).permit(:term, :definition, :usage, :user_id, :image, :video_url, :image_url)
  end

end
