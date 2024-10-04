import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TokenService } from './token.service';
import { ApplicationUser } from '../models/rest-api/application-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public login(_applicationUser: ApplicationUser): Observable<void> {
    // return this.http
    //   .post<void>('/api/users/login', applicationUser, { observe: 'response' })
    //   .pipe(
    //     map((response: HttpResponse<void>) => {
    //       this.tokenService.setToken(response.headers.get('Authorization'));
    //     })
    //   );
    return of();
  }

  public register(applicationUser: ApplicationUser): Observable<void> {
    return this.http.post<void>('/api/users/register', applicationUser);
  }
}
