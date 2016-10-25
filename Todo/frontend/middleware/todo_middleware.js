import { REQUEST_TODOS, RECEIVE_TODOS, CREATE_TODO, UPDATE_TODO, DESTROY_TODO, receiveTodos,  receiveTodo, removeTodo } from '../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../util/todo_api_utils';

const TodoMiddleware = ({dispatch}) => next => action => {
  let success = null;
  let error = e => console.log(e);
  switch (action.type) {
    case REQUEST_TODOS:
      success = data => dispatch(receiveTodos(data));
      fetchTodos(success, error);
      break;
    case CREATE_TODO:
      success = data => dispatch(receiveTodo(data));
      createTodo(action.todo, success, error);
      break;
    case UPDATE_TODO:
      success = data => dispatch(receiveTodo(data));
      updateTodo(action.todo, success, error);
      break;
    case DESTROY_TODO:
      success = data => dispatch(removeTodo(data.id));
      deleteTodo(action.id, success, error);
      break;
  }
  next(action);
};

export default TodoMiddleware;
