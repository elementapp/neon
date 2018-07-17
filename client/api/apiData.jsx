/**
* @flow
*/

import type {Dispatch} from 'redux';

import {apiFetch} from './apiFetch';
import type {Method} from './apiFetch';

const ApiDataStatus = {
  READY: 'READY',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

// Redux action types
const FETCH_API_DATA = 'FETCH_API_DATA';

// Redux actions
type ApiDataAction = {
  type: string,
  error: {},
  status: $Values<typeof ApiDataStatus>,
};

function fetchLoading(): ApiDataAction {
  return {
    type: FETCH_API_DATA,
    status: ApiDataStatus.LOADING,
  };
}

function fetchSuccess(data): ApiDataAction {
  return {
    type: FETCH_API_DATA,
    data,
    status: ApiDataStatus.SUCCESS,
  };
}

function fetchError(error): ApiDataAction {
  return {
    type: FETCH_API_DATA,
    error,
    status: ApiDataStatus.ERROR,
  };
}

export function fetchApiData(dataKey: string, uri: string, method: Method, body: ?{}) {
  return (dispatch: Dispatch<ApiDataAction>) => {
    dispatch(fetchLoading());

    apiFetch(uri, method, body).then(json => {
      dispatch(fetchSuccess(json));
    }).catch(error => {
      dispatch(fetchError(error));
    })
  };
}

type State = {
  data: ?{},
  error: ?{},
  status: $Values<typeof ApiDataStatus>,
}

const INITIAL_STATE = {
  data: null,
  error: null,
  status: ApiDataStatus.READY,
};

export function apiData(state: State = INITIAL_STATE, action: ApiDataAction) {
  switch (action.type) {
    case FETCH_API_DATA:
      const {type, ...actionRest} = action;
      return {
        ...state,
        ...actionRest,
      };
    default:
      return state;
  }
}
