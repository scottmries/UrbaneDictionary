class Term < ActiveRecord::Base
  validates :term, :definition, :user_id, presence: true
end
