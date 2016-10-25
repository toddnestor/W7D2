import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = {detail: false};
  }

  toggleDone(e) {
    e.preventDefault();
    let {todo, updateTodo} = this.props;
    todo.done = !todo.done;
    updateTodo(todo);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render(){
    let {todo} = this.props;
    return(
      <li>
        <h3 onClick={this.toggleDetail}>{todo.title}</h3>
        <button onClick={this.toggleDone}>{todo.done ? 'Undo' : 'Done'}</button>
        <TodoDetailViewContainer display={this.state.detail} id={todo.id} body={todo.body} />
      </li>
    );
  }
}



export default TodoListItem;
