import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'oauth';
  private readonly authUrl = `${this.baseUrl}/authorization`;
  private readonly tokenUrl = `${this.baseUrl}/token`;

  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public login(): Observable<unknown> {
    return this.http.get('oauth/authorize', {
      params: {
        client_id: '123',
        response_type: 'code',
        scope: 'openid email jcpets:roles jcpets:pets:write',
        prompt: 'login consent',
      },
    });
  }
}
