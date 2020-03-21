import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public login(auth: Auth): Observable<void> {
    return this.http
      .post<void>(
        '/api/users/login',
        auth,
        { observe: 'response' }
      )
      .pipe(
        map((response: HttpResponse<void>) => {
          this.tokenService.setToken(response.headers.get('Authorization'));
        })
      );
  }
}
