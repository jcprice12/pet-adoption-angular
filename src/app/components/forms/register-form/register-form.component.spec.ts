import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../../services/auth.service';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let registerMock: jest.Mock;

  beforeEach(async () => {
    registerMock = jest.fn();
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {
            register: registerMock,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
