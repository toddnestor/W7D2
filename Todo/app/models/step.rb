class Step < ActiveRecord::Base
  validates :title, :todo_item, presence: true
  belongs_to :todo_item
end
