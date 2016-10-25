class Api::TodoItemsController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  def show
    render json: @todo
  end

  def index
    @todos = TodoItem.all
    render json: @todos
  end

  def create
    @todo = TodoItem.new(todo_params)

    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def destroy
    @todo.destroy
    render json: @todo
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

  def set_todo
    @todo = TodoItem.find(params[:id])
  end
end
