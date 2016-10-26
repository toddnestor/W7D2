export const allTodos = state => {
  let keys = Object.keys(state.todos);
  return keys.map( key => state.todos[key]);
};

export const allSteps = (state, todoID) => {
  let keys = Object.keys(state.steps[todoID]);
  return keys.map( key => state.steps[todoID][key]);
};
