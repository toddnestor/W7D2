import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selector';
import TodoList from './todo_list';
import { requestTodos, createTodo, updateTodo, destroyTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  destroyTodo: id => dispatch(destroyTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
