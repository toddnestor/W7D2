import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    let { todos, createTodo, updateTodo, destroyTodo } = this.props;

    return (
      <div>
        <ul>
          {
            todos.map( todo => <TodoListItem key={todo.id}
                                             todo={todo}
                                             updateTodo={updateTodo}
                                             destroyTodo={destroyTodo} />)
          }
        </ul>
        <TodoForm createTodo={createTodo} />
      </div>
    );
  }
}

export default TodoList;
