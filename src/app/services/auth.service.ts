import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient, private readonly tokenService: TokenService) { }

  public login(username: string, password: string): Observable<void> {
    return this.http.post<void>('/api/users/login', { username: username, password: password }, { observe: 'response' }).pipe(map((response: HttpResponse<void>) => {
      this.tokenService.setToken(response.headers.get('Authorization'));
    }));
  }
}
