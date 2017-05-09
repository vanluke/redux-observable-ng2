import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info.component';
import { LoginComponent } from '../auth/login.component';
import {
  loginToggleModal,
  login,
  logout,
} from '../auth/action-creators';
import reduxMockStore from 'redux-mock-store';
import { combineEpics, Epic } from 'redux-observable';
import { ILoginUser } from '../auth/login-user.d';
import { createEpicMiddleware } from 'redux-observable';
import { loginEpic } from '../auth/epics';

const epics = combineEpics(loginEpic) as Epic<{}, {}>;
const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: {
  },
});

const mockStore = () => reduxMockStore([epicMiddleware]);

describe('App component', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, UserInfoComponent, LoginComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: '', component: AppComponent },
      ])],
      providers: [
        { provide: 'store', useValue: {
          getState: () => {
            return { loginReducer: {} };
          },
          subscribe: () => {},
          dispatch: () => {},
        } },
      ],
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

  it('should store be defined', () => expect(component.store).toBeDefined());

  it('should dispatch logout', () => {
    spyOn(component.store, 'dispatch');
    component.logout();
    expect(component.store.dispatch).toHaveBeenCalledWith(logout());
  });

  it('should have called toggleModalLogin', () => {
    spyOn(component, 'toggleModalLogin');
    component.logout();
    expect(component.toggleModalLogin).toHaveBeenCalled();
  });

  it('should closeLogin called toggleModalLogin', () => {
    spyOn(component, 'toggleModalLogin');
    component.closeLogin();
    expect(component.toggleModalLogin).toHaveBeenCalled();
  });

  it('should login dispatch login', () => {
    spyOn(component.store, 'dispatch');
    const expected = { name: 'John', password: 'doe' };
    component.login(expected);
    expect(component.store.dispatch).toHaveBeenCalledWith(login(expected));
  });

  it('should openLogin call toggleModalLogin ', () => {
    spyOn(component, 'toggleModalLogin');
    component.openLogin(new Event('click'));
    expect(component.toggleModalLogin).toHaveBeenCalled();
  });

  it('should toggleModalLogin dispatch toggleModalLogin', () => {
    spyOn(component.store, 'dispatch');
    component.toggleModalLogin();
    expect(component.store.dispatch).toHaveBeenCalledWith(loginToggleModal());
  });
});