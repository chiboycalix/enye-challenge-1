import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import userReducer from '../store/user/reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store;