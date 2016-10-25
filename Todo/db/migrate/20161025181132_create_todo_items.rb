class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, null: false, default: false

      t.timestamps null: false
    end
  end
end
