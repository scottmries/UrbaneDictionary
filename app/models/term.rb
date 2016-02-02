class Term < ActiveRecord::Base
  include PgSearch

  validates :term, :definition, :user_id, presence: true

  belongs_to :user

  multisearchable :against => [:term]



end
