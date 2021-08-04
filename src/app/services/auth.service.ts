import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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

  public login(applicationUser: ApplicationUser): Observable<void> {
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
