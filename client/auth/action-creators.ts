import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILS,
} from './consts';

export const login = ({ name, password }) => ({
  type: LOGIN,
  payload: {
    name, 
    password,
  },
});

export const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...response,
  },
});

export const loginFails = response => ({
  type: LOGIN_FAILS,
  payload: {
    ...response,
  },
});

export const logout = response => ({
  type: LOGOUT,
});

export const logoutSuccess = response => ({
  type: LOGOUT_SUCCESS,
  payload: {
    ...response,
  },
});

export const logoutFails = response => ({
  type: LOGOUT_FAILS,
  payload: {
    ...response,
  },
});