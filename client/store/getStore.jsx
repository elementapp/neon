/**
 * @flow
 */

import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';


export function getStore(initialState: {} = {}) {
  const composables = [
    applyMiddleware(thunk),
  ];

  const composedCreateStore = compose(...composables)(createStore);
  const reducer = combineReducers(reducers);

  return createStore(reducer, initialState);
}
