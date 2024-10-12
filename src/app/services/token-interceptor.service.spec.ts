import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenInterceptorService,
        {
          provide: AuthService,
          useValue: {
            tokens: {},
          },
        },
      ],
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
