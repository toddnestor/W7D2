import React from 'react';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(e) {
    e.preventDefault();
    let { id, destroyTodo } = this.props;
    destroyTodo(id);
  }

  render(){
    let {body, id, display} = this.props;
    return(
      <div style={{display: display ? 'block' : 'none'}}>
        <p>{body}</p>
        <button onClick={this.deleteTodo}>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
