class ChangeSessionsColumn < ActiveRecord::Migration
  def change
    drop_table :sessions do |t|

      t.timestamps null: false
    end
    create_table :session do |t|

      t.timestamps null: false
    end
  end
end
