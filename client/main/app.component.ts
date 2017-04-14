import { Component, OnInit } from '@angular/core';
import { IUser } from './user.d';
import './_app.scss';

@Component({
  selector: 'app',
  template: `<div class="c-app">
    <nav class="c-app__nav">
      <a [routerLink]="['/']" class="c-app__link">Home</a>
      <user-info *ngIf="isAuthenticated()" 
        [user]="user" 
        (logout)="logout()">
      </user-info>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.user = <IUser>{
        name: 'John',
        surname: 'Doe',
        avatar: 'http://wfarm3.dataknet.com/static/resources/icons/set3/c9f1cdf48670.png',
      }
    }, 1000);
  }
  
  logout() {
    this.user = undefined;
  }

  isAuthenticated() {
    return !!this.user;
  }

  user: IUser;
  isLoginVisible: boolean = false;
}
