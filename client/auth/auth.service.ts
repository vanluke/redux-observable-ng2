import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/observable/dom/ajax';

//TODO: create config obj.
const authUrl = 'http://localhost:1337/api/v0/auth';
@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  authenticate(name: string, password: string): Observable<any> {
    const headers = new Headers({ 
      Accept: 'application/json',
    });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(authUrl, {
      username: name,
      password, 
    }, {
      headers,
    }).map(response => response.json())
      .catch(this.handleError);
  }

  handleError(e: Response) {
    console.error('Auth error', e);
    return Observable.throw(e);
  }
}