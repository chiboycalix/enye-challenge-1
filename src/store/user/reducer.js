import {  initialState } from './state';
import { ADD_USER } from './actions'


export default (state = initialState, actions) => {
  const { type, user } = actions
  switch (type) {
    case ADD_USER:
      return [...state, user]
    default:
      return state;
  }
  
}