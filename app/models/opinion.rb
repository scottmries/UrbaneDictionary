class Opinion < ActiveRecord::Base
  belongs_to :term
  belongs_to :user
  validates :term, uniqueness: { scope: :user,
    message: "opinion has one term and one user" }

  def find_by_user_id_and_term_id(opts)
    Opinion.where("user_id = ?", opts[:user_id]).where("term_id = ?", opts[:term_id])
  end
end
