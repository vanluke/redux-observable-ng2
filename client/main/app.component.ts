import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { IUser } from './user.d';
import {
  loginToggleModal,
  login,
  logout,
} from '../auth/action-creators';
import { ILoginUser } from '../auth/login-user.d';
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
      <a 
        class="c-app__link" 
        (click)="openLogin($event)" 
        *ngIf="!isAuthenticated()"
      >Login
      </a>
    </nav>
    <login
      *ngIf="isLoginModalVisible"
      (onLogin)="login($event)"
      (onLoginClose)="closeLogin($event)"
    >
    </login>
    <router-outlet></router-outlet>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    @Inject('store') private store, 
    private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.storeSubscription = this.store && this.store.subscribe(() => {
      const { loginReducer } = this.store.getState();
      this.isLoading = loginReducer.isLoading;
      this.isLoginModalVisible = loginReducer.isLoginModalVisible;
      this.user = loginReducer.user;
      this.error = loginReducer.error;
      this.cd.detectChanges();
    });
  }
  
  toggleModalLogin() {
    const { dispatch } = this.store;
    dispatch(loginToggleModal());
  }

  openLogin($event) {
    $event.preventDefault();
    this.toggleModalLogin();
  }

  login(userLoginData: ILoginUser) {
    const { dispatch } = this.store;
    dispatch(login(userLoginData));
  }

  closeLogin() {
     this.toggleModalLogin();
  }

  logout() {
    const { dispatch } = this.store;
    dispatch(logout());
    this.toggleModalLogin();
  }

  isAuthenticated() {
    return !!this.user;
  }

  user: IUser;
  isLoading: boolean = false;
  token: any;
  error: any;
  isLoginModalVisible: boolean = false;
  storeSubscription: Function;
}
