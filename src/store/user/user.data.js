import { put, call, takeEvery } from 'redux-saga/effects';
import actions, { ADD_USER_REQUEST } from './actions';

export const post = async (path, data) => {
    try {
      const response = await fetch(`${path}`, {
        headers: {
            "Content-type": "application/json",
             Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(data),
      })
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
};

export const get = async (path) => {
    try {
      const response = await fetch(`${path}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET",
        mode: "cors"
      })
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

export function* createUser(action) {
      const { payload } = action;
      try {
        const result = yield call(post, 'https://us-central1-enye-functions.cloudfunctions.net/users', payload)
        return result;
      } catch (error) {
          yield put(actions.addUserError(error))
      }
  }
  export function* watchCreateUser() {
    yield takeEvery(ADD_USER_REQUEST, createUser)
}
