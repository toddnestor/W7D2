class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.references :todo_item, index: true, foreign_key: true
      t.boolean :done, default: false

      t.timestamps null: false
    end
  end
end
