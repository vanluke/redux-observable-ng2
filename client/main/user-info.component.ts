import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from './user.d';
import './_user-info.scss';

@Component({
  selector: 'user-info',
  template: `<div class="c-user-info">
    <nav class="c-user-info c-user-info--desktop">
      <header class="c-user-info__title">
        <h4 class="c-user-info__header">{{ user.name }}</h4>
      </header>
      <picture class="c-user-info__avatar-container">
        <img 
            [src]="user.avatar"
            class="c-user-info__avatar"
        />
      </picture>
      <input 
        type="checkbox" 
        class="c-user-info__arrow"
        id="c-user-info__arrow"
      />
      <label 
        for="c-user-info__arrow" 
        class="c-user-info__arrow-label">
      </label>
      <ul class="c-user-info__dropdown">
        <li><a class="c-user-info__link">Settings</a></li>
        <li><a class="c-user-info__link" (click)="onLogout()">Log Out</a></li>
      </ul>
    </nav>
    <nav class="c-user-info c-user-info--mobile">
      <a class="c-app__link c-app__link--inline">Settings</a>
      <a class="c-app__link c-app__link--inline" (click)="onLogout()">Logout</a>
    </nav>
  </div>`,
}) 
export class UserInfoComponent {
  @Input() user: IUser;
  @Output() logout = new EventEmitter();

  onLogout() {
    this.logout.emit('logout');
  }
}