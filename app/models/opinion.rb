class Opinion < ActiveRecord::Base
  belongs_to :term
  belongs_to :user
  validates :term, uniqueness: { scope: :user,
    message: "opinion has one term and one user" }
end
