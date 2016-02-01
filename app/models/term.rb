class Term < ActiveRecord::Base
  include PgSearch

  validates :term, :definition, :user_id, presence: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_attached_file :image, default_url: "missing.png"

  multisearchable :against => [:term]



end
