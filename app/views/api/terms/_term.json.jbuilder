json.extract! the_term, :id, :term, :definition, :usage, :user_id, :created_at, :user, :video_url, :opinions, :opinioned_users
json.image_url asset_path(the_term.image.url)
# json.image_url asset_path(the_term.image_file_name)
