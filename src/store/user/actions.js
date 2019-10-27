export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

const addUserRequest = (payload) => ({
  type: ADD_USER_REQUEST,
  payload,
})

const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  user
})

const addUserError = (error) => ({
  type: GET_USER_ERROR,
  error,
})


const getUserRequest = (payload) => ({
  type: GET_USER_REQUEST,
  payload,
})

const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  user
})

const getUserError = (error) => ({
  type: GET_USER_ERROR,
  error,
})

export default { addUserRequest, addUserSuccess, addUserError, getUserRequest, getUserSuccess, getUserError}