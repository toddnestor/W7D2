import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: '', body: '', done: false};
    this.titleChanged = this.titleChanged.bind(this);
    this.bodyChanged = this.bodyChanged.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  titleChanged(e) {
    this.setState({title: e.currentTarget.value});
  }

  bodyChanged(e) {
    this.setState({body: e.currentTarget.value});
  }

  createTodo(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({title:"", body:""});
  }

  render() {
    let {title, body, done} = this.state;

    return (
      <form onSubmit={this.createTodo}>
        <label>
          Title
          <input type="text" onChange={this.titleChanged} value={title} />
        </label>
        <br />
        <label>
          Body
          <textarea onChange={this.bodyChanged} value = {body}></textarea>
        </label>
        <br />
        <button>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
