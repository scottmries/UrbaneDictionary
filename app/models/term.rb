class Term < ActiveRecord::Base
  validates :term, :definition, :user_id, presence: true

  belongs_to :user
end
