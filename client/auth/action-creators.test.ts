import {
  loginToggleModal,
  login,
  logout,
  loginSuccess,
  loginFails,
  logoutSuccess,
  logoutFails,
} from '../auth/action-creators';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILS,
  LOGIN_TOGGLE,
} from './consts';

describe('Auth action creators', () => {
  it('should login return aciton object', () => {
    const user = { name: 'John', password: 'Doe' };
    const actual = login(user);
    expect(actual).toEqual(jasmine.objectContaining({
      type: LOGIN,
      payload: {
        ...user,
      },
    }));
  });

  it('should loginSuccess return aciton object', () => {
    const response = { name: 'John', token: 'token' };
    const actual = loginSuccess(response);
    expect(actual).toEqual(jasmine.objectContaining({
      type: LOGIN_SUCCESS,
      payload: {
        ...response,
      },
    }));
  });

  it('should loginFails return aciton object', () => {
    const response = { message: 'error' };
    const actual = loginFails(response);
    expect(actual).toEqual(jasmine.objectContaining({
      type: LOGIN_FAILS,
      payload: {
        ...response,
      },
    }));
  });

  it('should logout return aciton object', () => {
    const response = { message: 'error' };
    const actual = logout();
    expect(actual).toEqual(jasmine.objectContaining({
      type: LOGOUT,
    }));
  });
});
