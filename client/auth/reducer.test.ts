import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOGIN_TOGGLE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILS,
} from './consts';
import { loginReducer, initState } from './reducer';
import * as Immutable from 'seamless-immutable';

describe('Auth reducer', () => {
  it('should handle LOGIN', () => {
    const action = { type: LOGIN, payload: {
      name: 'John',
      password: 'Doe',
    } };
    const actual = loginReducer(initState, action);
    expect(actual).toEqual(jasmine.objectContaining({
      isLoading: true,
    }));
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS, payload: {
      token: 'token',
      user: {
        name: 'John',
      },
    } };
    const actual = loginReducer(initState, action);
    expect(actual).toEqual(jasmine.objectContaining({
      isLoading: false,
      token: 'token',
      user: {
        name: 'John',
      },
    }));
  });

  it('should handle LOGIN_FAILS', () => {
    const action = { type: LOGIN_FAILS, payload: {
      error: {
        message: 'error',
      },
    } };
    const actual = loginReducer(initState, action);
    expect(actual).toEqual(jasmine.objectContaining({
      isLoading: false,
      error: {
        message: 'error',
      },
    }));
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT, payload: {} };
    const actual = loginReducer(initState, action);
    expect(actual).toEqual(jasmine.objectContaining({
      isLoading: false,
      token: undefined,
      user: undefined,
    }));
  });

  it('should handle initState', () => {
    const action = { type: '@redux/init', payload: {} };
    const actual = loginReducer(initState, action);
    expect(actual).toEqual(jasmine.objectContaining({
      ...initState,
    }));
  });
});