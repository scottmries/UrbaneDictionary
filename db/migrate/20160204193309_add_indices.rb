class AddIndices < ActiveRecord::Migration
  def change
    add_index :terms, :id
    add_index :users, :id
    add_index :opinions, [:user_id, :term_id], unique: true
    add_index :opinions, :term_id
  end
end
