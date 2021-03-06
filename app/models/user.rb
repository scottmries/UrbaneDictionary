class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :terms
  has_many :opinions
  has_many :opinioned_terms, through: :opinions, source: :term

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]

    user = User.find_by(provider: provider, uid: uid)

    return user if user

    User.create(
      provider: provider,
      uid: uid,
      email: auth_hash[:info][:name],
      password: SecureRandom::urlsafe_base64
    )
  end

  def createTerm(term_params)
    term_params[:user_id] = self.id
    term = Term.new(term_params)
    term.save!
  end

  def self.create_guest_user
    user = User.new(username: "guest", password: SecureRandom.urlsafe_base64(16))
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def email
    self.username
  end

  def email=(email)
    self.username = email
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
