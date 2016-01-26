class CreateTerms < ActiveRecord::Migration
  def change
    create_table :terms do |t|
      t.string :term, null: false
      t.string :definition, null: false
      t.string :usage
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
