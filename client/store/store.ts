import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { ReflectiveInjector } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { 
  Http, 
  XHRBackend, 
  ConnectionBackend, 
  BrowserXhr, 
  ResponseOptions, 
  XSRFStrategy, 
  BaseResponseOptions, 
  CookieXSRFStrategy, 
  RequestOptions, 
  BaseRequestOptions,
} from '@angular/http';
import reducer from '../reducer/reducer';
import epic from '../epic/epic';

const injector = ReflectiveInjector.resolveAndCreate([
  Http, 
  BrowserXhr,
  { provide: ConnectionBackend, useClass: XHRBackend },
  { provide: ResponseOptions, useClass: BaseResponseOptions },
  { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('myCookieName', 'My-Header-Name') },
  { provide: RequestOptions, useClass: BaseRequestOptions },
  AuthService]);
const authService = injector.get(AuthService);

const reduxLogger = createLogger && createLogger();
const epicMiddleware = createEpicMiddleware(epic, {
  dependencies: { authService },
});

const storeWithMiddleware =
  applyMiddleware(epicMiddleware, reduxLogger)(createStore);

export default function configureStore() {
  return storeWithMiddleware(reducer);
};
