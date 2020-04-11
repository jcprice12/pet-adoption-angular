import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private readonly tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newHeaders = req.headers;
    if (this.tokenService.getToken() && this.isStateChangeMethod(req.method)) {
      newHeaders = newHeaders.append(
        'Authorization',
        this.tokenService.getToken()
      );
    }
    return next.handle(req.clone({ headers: newHeaders }));
  }

  private isStateChangeMethod(method: string): boolean {
    console.log('Method is:', method);
    return method === 'POST' || method === 'PUT' || method === 'DELETE';
  }
}
