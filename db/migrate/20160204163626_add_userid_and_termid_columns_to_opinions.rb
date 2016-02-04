class AddUseridAndTermidColumnsToOpinions < ActiveRecord::Migration
  def change
    add_column :opinions, :user_id, :integer
    add_column :opinions, :term_id, :integer
  end
end
