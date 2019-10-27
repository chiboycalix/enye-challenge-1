import {  initialState } from './state';
import { 
  ADD_USER_SUCCESS, 
  ADD_USER_REQUEST, 
  ADD_USER_ERROR, 
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS, 
} from './actions'


export default (state = initialState, actions) => {
  const { type, user, error, payload } = actions
  switch (type) {
    case ADD_USER_REQUEST:
      return [...state, payload] 
    case ADD_USER_SUCCESS:
      return [...state, user]
    case ADD_USER_ERROR:
        return [...state, error]
    
    case GET_USER_REQUEST:
        return [...state, payload] 
    case GET_USER_SUCCESS:
        return [...state, user]
    case GET_USER_ERROR:
        return [...state, error]
    default:
      return state;
  }
}