import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div>
    <nav>
      <a [routerLink]="['/']" class="c-app__link">Home</a>
    </nav>
    <header></header>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
}
