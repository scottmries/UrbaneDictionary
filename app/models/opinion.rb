class Opinion < ActiveRecord::Base
  belongs_to :term
  belongs_to :user
end
