import { Component, Output, EventEmitter } from '@angular/core';
import './_login.scss';

@Component({
  selector: 'login',
  template: `<section class="c-login">
    <a class="c-login__close" (click)="close()">
        <svg class="c-login__close-svg" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg>
    </a>
    <form class="c-login__form">
      <div class="c-login__group">
        <label class="c-login__label"><i class="fa fa-envelope"></i></label>
        <input
          #username
          type="text"
          placeholder="username|email address"
          class="c-login__input-text" 
        />
      </div>
      <div class="c-login__group">
        <label class="c-login__label"><i class="fa fa-lock"></i></label>
        <input
          #password
          type="password"
          placeholder="password"
          class="c-login__input-text" 
        />
      </div>
      <div class="c-login__group">
        <button class="c-login__button" (click)="login(username.value, password.value)">Login</button>
      </div>
    </form>
  </section>`,
})
export class LoginComponent {
  @Output() onLoginClose = new EventEmitter();

  close() {
    this.onLoginClose.emit('close');
  }

  login(username: string, password: string) {
    console.log(username, password);
  }
}