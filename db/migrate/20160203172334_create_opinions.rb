class CreateOpinions < ActiveRecord::Migration
  def change
    create_table :opinions do |t|
      t.boolean :liked
      t.timestamps null: false
    end
  end
end
