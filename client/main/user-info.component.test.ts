import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { UserInfoComponent } from './user-info.component';

describe('UserInfo component', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
    });
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    component.user = {
      name: 'John',
      surname: 'Doe',
      // tslint:disable-next-line
      avatar: 'http://wfarm3.dataknet.com/static/resources/icons/set3/c9f1cdf48670.png',
    };

    fixture.detectChanges();
  });
  it('should create component', () => expect(component).toBeDefined() );
  it('should render user name', () => {
    const elements = fixture
      .debugElement
      .query(By.css('.c-user-info__header'));
    const actual = elements.nativeElement.textContent;
    const expected = 'John';
    expect(actual).toEqual(expected);
  });

  it('should handle logout', () => {
    spyOn(component.logout, 'emit');
    const elements = fixture
      .nativeElement
      .querySelectorAll('.c-user-info__link');

    const link = elements[1];
    link.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.logout.emit).toHaveBeenCalledWith('logout');
  });

  it('should handle logout on mobile', () => {
    spyOn(component.logout, 'emit');
    const elements = fixture
      .nativeElement
      .querySelectorAll('.c-app__link--inline');
    
    const link = elements[1];
    link.dispatchEvent(new Event('click'));
    
    fixture.detectChanges();

    expect(component.logout.emit).toHaveBeenCalledWith('logout');
  });
});