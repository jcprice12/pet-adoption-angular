import { TestBed } from '@angular/core/testing';
import { TokenInterceptorService } from './token-interceptor.service';
import { TokenService } from './token.service';


describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;
  let getTokenMock: jest.Mock;

  beforeEach(() => {
    getTokenMock = jest.fn()
    TestBed.configureTestingModule({
      providers: [
        TokenInterceptorService,
        {
          provide: TokenService,
          useValue: {
            getToken: getTokenMock
          }
        }
      ]
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
