import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('AuthService', () => {
  let service: AuthService;
  let postRequestMock: jest.Mock;
  let setTokenMock: jest.Mock;

  beforeEach(() => {
    postRequestMock = jest.fn();
    setTokenMock = jest.fn();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            post: postRequestMock,
          },
        },
        {
          provide: TokenService,
          useValue: {
            setToken: setTokenMock,
          },
        },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
