import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  ChangeDetectorRef, 
} from '@angular/core';
import { IUser } from './user.d';
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
        (click)="openLogin()" 
        *ngIf="!isAuthenticated()"
      >Login
      </a>
    </nav>
    <login
      *ngIf="isLoginVisible"
      (onLogin)="login($event)"
      (onLoginClose)="logout($event)"
    >
    </login>
    <router-outlet></router-outlet>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // TODO: Connect to redux
  }
  
  openLogin() {
    this.isLoginVisible = true;
  }

  login({ name, password }: ILoginUser) {
    // TODO: Connect to redux
   // this.isLoginVisible = false;

    // this.cd.detectChanges();
  }

  logout() {
    // TODO: Connect to redux
   // this.isLoginVisible = false;
  }

  isAuthenticated() {
    return !!this.user;
  }

  user: IUser;
  isLoginVisible: boolean = false;
}
