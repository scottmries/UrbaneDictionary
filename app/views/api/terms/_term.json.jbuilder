json.extract! the_term, :id, :term, :definition, :usage, :user_id, :created_at, :user, :video_url
json.image_url asset_path(the_term.image_file_name)
