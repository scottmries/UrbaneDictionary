json.extract! the_term, :id, :term, :definition, :usage, :user_id, :created_at, :user
json.image_url asset_path(term.image.url)
