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

const injector = ReflectiveInjector.resolveAndCreate([
  Http, 
  BrowserXhr,
  { provide: ConnectionBackend, useClass: XHRBackend },
  { provide: ResponseOptions, useClass: BaseResponseOptions },
  { provide: XSRFStrategy,
     useValue: new CookieXSRFStrategy('myCookieName', 'My-Header-Name') },
  { provide: RequestOptions, useClass: BaseRequestOptions },
  AuthService]);
const authService = injector.get(AuthService);

export { authService };