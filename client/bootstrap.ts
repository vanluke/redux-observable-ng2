import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  JsonpModule,
 } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './main/app.component';
import { AboutComponent } from './main/about.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'about',
      component: AboutComponent,
    }]),
    HttpModule,
    JsonpModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
