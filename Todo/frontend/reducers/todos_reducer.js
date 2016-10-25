import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';


const TodosReducer = (state = {}, action) => {
  let duped = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => (newState[todo.id] = todo));
      return newState;
    case RECEIVE_TODO:
      duped[action.todo.id] = action.todo;
      return duped;
    case REMOVE_TODO:
      delete duped[action.id];
      return duped;
    default:
      return state;
  }
};

export default TodosReducer;
