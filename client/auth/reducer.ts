import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOGIN_TOGGLE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILS,
} from './consts';

import * as Immutable from 'seamless-immutable';

export const initState = Immutable({
  isLoading: false,
  isLoginModalVisible: false,
  token: undefined,
  error: undefined,
  user: undefined,
});

export interface IAction {
  type: string;
  payload?: any;
}

export const initAction = <IAction>{
  type: '',
  payload: {},
};

export const loginReducer = 
  (state = initState, action: IAction = initAction) => {
  switch (action.type) {
    case LOGIN:
      return state.set('isLoading', true);
    case LOGIN_SUCCESS:
    debugger;
      return state
        .set('isLoading', false)
        .set('token', action.payload.token)
        .set('user', action.payload.user);
    case LOGIN_FAILS:
      return state
        .set('isLoading', false)
        .set('error', action.payload.error);
    case LOGOUT:
      return state
        .set('token', undefined)
        .set('user', undefined);
    case LOGIN_TOGGLE:
      return state.set('isLoginModalVisible', !state.isLoginModalVisible);
    default: return state;
  }
};