import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AboutComponent } from './about.component';

describe('About component', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
    });
    fixture = TestBed.createComponent(AboutComponent);

    component = fixture.componentInstance;
  });
  it('should have header to contain About text', () => {
    const elements = fixture.debugElement.query(By.all());
    const actual = elements.nativeElement.textContent;
    const expected = 'About';
    expect(actual).toContain(expected);
  });
});