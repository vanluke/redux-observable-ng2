import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';

describe('Login component', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
  });
  it('should create component', () => expect(component).toBeDefined() );
  it('should handle close', () => {
    spyOn(component.onLoginClose, 'emit');
    const element = fixture.nativeElement.querySelector('.c-login__close');
    element.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.onLoginClose.emit).toHaveBeenCalledWith('close');
  });
  it('should handle login', () => {
    spyOn(component, 'login');
    const element = fixture.nativeElement.querySelector('.c-login__button');
    element.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.login).toHaveBeenCalled();
  });
   it('should emit onLogin', () => {
    spyOn(component.onLogin, 'emit').and.callThrough();
    const element = fixture.nativeElement.querySelector('.c-login__button');
    element.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.onLogin.emit).toHaveBeenCalled();
  });
  it('should handle login and close modal', () => {
    spyOn(component, 'login').and.callThrough();
    spyOn(component, 'close');
    const element = fixture.nativeElement.querySelector('.c-login__button');
    element.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.login).toHaveBeenCalled();
    expect(component.close).toHaveBeenCalled();
  });
  it('should handle username and password', () => {
    spyOn(component, 'login').and.callThrough();
    const password = fixture.debugElement.query(By.css('input[type="password"]'));
    const username = fixture.debugElement.query(By.css('input[type="text"]'));

    username.nativeElement.value = 'John';
    username.nativeElement.dispatchEvent(new Event('input'));

    password.nativeElement.value = 'password';
    password.nativeElement.dispatchEvent(new Event('input'));

    const element = fixture.nativeElement.querySelector('.c-login__button');
    element.dispatchEvent(new Event('click'));

    expect(component.login).toHaveBeenCalledWith('John', 'password');
  });
});