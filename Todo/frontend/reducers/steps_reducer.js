import {RECEIVE_STEP, REMOVE_STEP, RECEIVE_STEPS} from '../actions/step_actions';
import merge from 'lodash/merge';

const StepsReducer = (state = {}, action) => {
  let duped = merge({}, state);
  switch(action.type){
    default:
      return state;
  }
};

export default StepsReducer;
