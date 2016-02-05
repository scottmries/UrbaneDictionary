# json.extract! @user_with_terms, :user, :terms, :opinions, :opinioned_terms
json.extract! @user_with_terms, :user, :opinions, :opinioned_terms
json.array! @user_with_terms[:terms] do |term|
  json.partial! 'api/terms/term', the_term: term

end
