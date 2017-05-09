import { Observable } from 'rxjs';
import {
  login,
  loginSuccess,
  loginFails,
} from './action-creators';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
} from './consts';

export const loginEpic = ($action, store, {authService}​​) =>
  $action.ofType(LOGIN)
    .mergeMap(action => authService​​
      .authenticate(action.payload.name, action.payload.password))
    .map(reponse => loginSuccess(reponse))
    .catch(error => loginFails(error));

