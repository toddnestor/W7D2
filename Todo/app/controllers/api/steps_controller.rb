class Api::StepsController < ApplicationController
  def index
    @steps = Step.where(todo_item_id: params[:todo_item_id])
    render json: @steps
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render json: @step
  end

  def create
    @step = Step.new(step_params)
    @step.todo_item_id = params[:todo_item_id]
    
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step.update(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages
    end
  end

  private
  def step_params
    params.require(:step).permit(:title, :done)
  end
end
