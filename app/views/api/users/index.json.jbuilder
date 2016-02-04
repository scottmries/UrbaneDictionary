json.array! @users_with_terms do |user|
 json.extract! user, :user, :terms, :opinions, :opinioned_terms
end
