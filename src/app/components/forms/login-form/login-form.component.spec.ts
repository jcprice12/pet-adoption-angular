import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../../services/auth.service';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loginMock: jest.Mock;

  beforeEach(async () => {
    loginMock = jest.fn()
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [{
        provide: AuthService,
        useValue: {
          login: loginMock
        }
      }],
      schemas: [NO_ERRORS_SCHEMA]//hack, see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
