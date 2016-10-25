export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/todo_items',
    success,
    error
  });
};

export const fetchTodo = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/todo_items/${id}`,
    success,
    error
  });
};

export const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/todo_items',
    data: {todo},
    success,
    error
  });
};

export const updateTodo = (todo, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/todo_items/${todo.id}`,
    data: {todo},
    success,
    error
  });
};

export const deleteTodo = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/todo_items/${id}`,
    success,
    error
  });
};
