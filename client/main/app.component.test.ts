import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('App component', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: '', component: AppComponent },
      ])],
    });
    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;
  });
  it('should create component', () => expect(component).toBeDefined() );
});