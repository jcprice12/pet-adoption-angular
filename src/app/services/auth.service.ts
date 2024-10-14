import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as jose from 'jose';
import {
  Observable,
  catchError,
  from,
  iif,
  map,
  mergeMap,
  of,
  tap,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment';
import { CodedError } from '../models/error/coded.error';
import { JWKS } from '../models/oauth/jwks.model';
import { Tokens } from '../models/oauth/tokens.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly clientId = '6efb7ff9-75b8-4073-8412-3b548921cc47';
  private readonly authUrl = '/authorize';
  private readonly tokenUrl = '/token';
  private readonly jwksUrl = '/keys';
  private readonly desiredScopes =
    'openid email jcpets:roles jcpets:pets:write';
  tokens: Tokens;

  constructor(
    private readonly http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public login(): Observable<unknown> {
    return this.authorize('login');
  }

  public consent(): Observable<unknown> {
    return this.authorize('consent');
  }

  public getTokens(code: string): Observable<unknown> {
    return this.http
      .post(this.tokenUrl, {
        code,
        grant_type: 'authorization_code',
        redirect_uri: environment.redirectUri,
        client_id: this.clientId,
      })
      .pipe(
        mergeMap((tokens: Tokens) =>
          iif(
            () => !!tokens.id_token,
            this.verifyIdToken(tokens.id_token).pipe(map(() => tokens)),
            of(tokens)
          )
        ),
        tap((tokens: Tokens) => {
          this.tokens = tokens;
        })
      );
  }

  private verifyIdToken(idToken: string): Observable<unknown> {
    return this.getKeyLike().pipe(
      catchError(() => throwError(() => new CodedError('invalid_jwk'))),
      mergeMap((keylike) =>
        from(jose.jwtVerify(idToken, keylike)).pipe(
          catchError(() => throwError(() => new CodedError('invalid_id_token')))
        )
      )
    );
  }

  private getKeyLike(): Observable<
    (
      protectedHeader?: jose.JWSHeaderParameters,
      token?: jose.FlattenedJWSInput
    ) => Promise<jose.KeyLike>
  > {
    return this.http
      .get<JWKS>(this.jwksUrl)
      .pipe(map((jwks) => jose.createLocalJWKSet(jwks)));
  }

  private authorize(prompt: string): Observable<unknown> {
    return this.http
      .get(this.authUrl, {
        observe: 'response',
        responseType: 'text',
        params: {
          client_id: this.clientId,
          response_type: 'code',
          scope: this.desiredScopes,
          prompt,
        },
      })
      .pipe(
        tap((res: { url?: string }) => {
          if (res.url) {
            this.document.location.href = res.url;
          }
        })
      );
  }
}
