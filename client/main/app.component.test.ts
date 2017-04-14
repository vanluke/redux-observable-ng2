import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info.component';
import { LoginComponent } from '../auth/login.component';

describe('App component', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, UserInfoComponent, LoginComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: '', component: AppComponent },
      ])],
    });
    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;
  });
  it('should create component', () => expect(component).toBeDefined() );

  it('should handle login click', () => {
    spyOn(component, 'openLogin').and.callThrough();

    component.user = undefined;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelectorAll('.c-app__link');
    element[1].dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.openLogin).toHaveBeenCalled();
  });
});