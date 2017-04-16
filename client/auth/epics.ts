import { Observable } from 'rxjs';
import {
  login,
  loginSuccess,
  loginFails,
  logout,
  logoutSuccess,
  logoutFails,
} from './action-creators';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILS,
} from './consts';

export const loginEpic = $action => 
  $action
    .ofType(LOGIN)
    .mergeMap((action) => {
      // Get from token user login and avatar.
      return Observable.of({
        user: {
          name: action.payload.name,
          password: action.payload.password,
        },
        token: 'token',
      });
    })
    .map(reponse => loginSuccess(reponse));;