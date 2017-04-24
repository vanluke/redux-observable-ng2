import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { 
  async, 
  getTestBed, 
  TestBed, 
  inject,
} from '@angular/core/testing';
import {
  LOGIN,
  LOGIN_SUCCESS,
} from './consts';
import * as epics from './epics';
import { 
  Response, 
  ResponseOptions, 
  HttpModule, 
  XHRBackend,
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
import { AuthService } from '../auth/auth.service';

const authResponse = require('./auth.response.mock.json');
const action$ = ActionsObservable.of(
    { type: LOGIN, payload: { name: 'John', password: 'abc123' }},
);

describe('loginEpic Epic', () => {
  const response = { ...authResponse };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        AuthService​​],
    });
  });
  it('should dispatch LOGIN_SUCCESS', inject([AuthService, XHRBackend], 
    (authService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(response)
          })));
        });
      const expectedOutputActions = [{ type: LOGIN }, { type: LOGIN_SUCCESS }];
    
      epics.loginEpic(action$, undefined, { authService })
        .toArray()
        .subscribe((resp) => {
          expect(resp[0].type).toEqual(LOGIN_SUCCESS);
        });
  }));
  it('should return authentication payload', inject([AuthService, XHRBackend], 
    (authService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(response)
          })));
        });
      const expectedOutputActions = [{ type: LOGIN }, { type: LOGIN_SUCCESS }];
    
      epics.loginEpic(action$, undefined, { authService })
        .toArray()
        .subscribe((resp) => {
          expect(resp[0].payload).toEqual(response);
        });
  }));
});