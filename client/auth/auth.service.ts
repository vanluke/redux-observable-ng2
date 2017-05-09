import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/app-config';
import { Http, Response, Headers } from '@angular/http';
import * as tokenDecode from 'jwt-decode';
import 'rxjs/add/observable/dom/ajax';

@Injectable()
export class AuthService {
  constructor(
    private http: Http) {}

  private getHeaders(): Headers {
    const headers = new Headers({ 
      Accept: 'application/json',
    });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

  getAuthUrl() {
    return config.get('auth').authUrl;
  }

  resolveToken({ token }) {
    return tokenDecode(token);
  }

  authenticate(name: string, password: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.getAuthUrl(), {
      username: name,
      password, 
    }, {
      headers,
    }).map(response => response.json())
      .map(token => ({
        user: this.resolveToken(token),
        token,
      }))
      .catch(this.handleError);
  }

  handleError(e: Response) {
    console.error('Auth error', e);
    return Observable.throw(e);
  }
}
