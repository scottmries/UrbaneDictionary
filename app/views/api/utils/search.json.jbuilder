json.total_count @search_results.total_count
json.results do
  json.array! @search_results do |result|
    # result = result.searchable
    json.extract! result, :searchable_id, :content

    # json.partial!("api/terms/term", the_term: result)
  end
end
