import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newHeaders = req.headers;
    if (this.authService.tokens) {
      newHeaders = newHeaders.append(
        'Authorization',
        `Bearer ${this.authService.tokens.access_token}`
      );
    }
    return next.handle(req.clone({ headers: newHeaders }));
  }
}
