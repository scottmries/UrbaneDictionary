class Term < ActiveRecord::Base
  include PgSearch

  validates :term, :definition, :user_id, presence: true

  belongs_to :user
  has_many :opinions
  has_many :opinioned_users, through: :opinions, source: :user

  multisearchable :against => [:term],
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  has_attached_file :image, :default_url => 'missing.png'
  has_attached_file :audio
  validates_attachment_content_type :image, :content_type => [/\Aimage\/.*\Z/, 'image/png']
  validates_attachment_content_type :audio, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]
end
