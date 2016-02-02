json.array! @users_with_terms do |user|
 json.extract! user, :user, :terms
end
