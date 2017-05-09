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
  payload: any;
}

export const initAction = <IAction>{
  type: '',
  payload: {},
};

export const loginReducer = (
  state = initState, 
  action: IAction = initAction) => (({
      [LOGIN]: state => state.set('isLoading', true),
      [LOGIN_SUCCESS]: (state, { payload }) => state
            .set('isLoading', false)
            .set('token', payload.token)
            .set('user', payload.user),
      [LOGIN_FAILS]: (state, { payload }) => state
            .set('isLoading', false)
            .set('error', payload.error),
      [LOGOUT]: state => state
            .set('token', undefined)
            .set('user', undefined),
      [LOGIN_TOGGLE]: state => state
            .set('isLoginModalVisible', !state.isLoginModalVisible),
    }[action.type])
      || function (s) { return s; })
    (state, action);