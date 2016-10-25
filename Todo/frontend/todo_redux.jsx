import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';



import { requestTodos, createTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selector';
import * as apiUtils from './util/step_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.store = store;
  window.createTodo = createTodo;
  window.apiutils = apiUtils;
  ReactDOM.render(<Root store={store} />, root);
});
