import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';


export default (initialState = {}) => {
  const middleware = [
    thunk, promiseMiddleware,
  ]
  return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}
