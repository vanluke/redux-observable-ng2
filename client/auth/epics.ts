import { Observable } from 'rxjs';
// import { ReflectiveInjector } from '@angular/core';
// import { AuthService } from './auth.service';
// import { 
//   Http, 
//   XHRBackend, 
//   ConnectionBackend, 
//   BrowserXhr, 
//   ResponseOptions, 
//   XSRFStrategy, 
//   BaseResponseOptions, 
//   CookieXSRFStrategy, 
//   RequestOptions, 
//   BaseRequestOptions,
// } from '@angular/http';
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

// const injector = ReflectiveInjector.resolveAndCreate([
//   Http, 
//   BrowserXhr,
//   { provide: ConnectionBackend, useClass: XHRBackend },
//   { provide: ResponseOptions, useClass: BaseResponseOptions },
//   { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('myCookieName', 'My-Header-Name') },
//   { provide: RequestOptions, useClass: BaseRequestOptions },
//   AuthService]);
// const authService = injector.get(AuthService);

export const loginEpic = ($action, store, { authService​​ }) => {
  return $action.ofType(LOGIN)
    .mergeMap(action => authService​​
      .authenticate(action.payload.name, action.payload.password))
    .map(reponse => loginSuccess(reponse));
};

  // $action
  //   .ofType(LOGIN)
  //   .mergeMap((action) => 
  //   // authService
  //   //   .authenticate(action.payload.name, action.payload.password)
  //   // {
  //   //   // Get from token user login and avatar.
  //     Observable.of({
  //       user: {
  //         name: action.payload.name,
  //         password: action.payload.password,
  //       },
  //       token: 'token',
  //     })
  //   ).map(reponse => loginSuccess(reponse));