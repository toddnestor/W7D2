export const fetchSteps = (todoId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/todo_items/${todoId}/steps`,
    success,
    error
  });
};

export const createStep = (todoId, step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/todo_items/${todoId}/steps`,
    data: {step},
    success,
    error
  });
};

export const updateStep = (step, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/steps/${step.id}`,
    data: {step},
    success,
    error
  });
};

export const destroyStep = (step, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/todo_items/${step.todo_item_id}/steps/${step.id}`,
    success,
    error
  });
};
