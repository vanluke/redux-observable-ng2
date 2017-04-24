import { 
  async, 
  getTestBed, 
  TestBed, 
  inject,
} from '@angular/core/testing';
import { 
  Response, 
  ResponseOptions, 
  HttpModule, 
  XHRBackend,
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthService } from './auth.service';

const authResponse = require('./auth.response.mock.json');

describe('Auth service', () => {
  const response = { ...authResponse };
  // let injector;
  // let service;
  // let mockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [HttpModule],
      providers: [
      { provide: XHRBackend, useClass: MockBackend },
      AuthService,
      ],
    });
   // injector = getTestBed();
  });

  // beforeEach(() => {
  //   mockBackend = injector.get(XHRBackend);
  //   service = injector.get(AuthService);
  // });

  it('should get token', 
    inject([AuthService, XHRBackend], (authService, xhrBackend) => {
    xhrBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response),
      })));
    });
    authService.authenticate('John', 'abc123').subscribe((resp) => {
      expect(resp).toBeDefined();
      expect(resp).toEqual(jasmine.objectContaining({
        user: {
          name: 'John',
        },
      }));
      expect(resp).toEqual(jasmine.objectContaining({
        token: response.token,
      }));
    });
  }));
});