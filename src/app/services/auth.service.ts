import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as jose from 'jose';
import pkceChallenge from 'pkce-challenge';
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
import { v4 as uuidv4 } from 'uuid';
import { environment } from '../../environments/environment';
import { AuthorizeCallbackError } from '../errors/authorize-callback.error';
import { AuthorizeError } from '../errors/authorize.error';
import { InvalidJwkError } from '../errors/invalid-jwk.error';
import { InvalidStateError } from '../errors/invalid-state.error';
import { InvalidTokenError } from '../errors/invalid-token.error';
import { TokenRetrievalError } from '../errors/token-retrieval.error';
import { AuthorizeResponse } from '../models/oauth/authorize-response.model';
import { Challenge } from '../models/oauth/challenge.model';
import { IdTokenPayload } from '../models/oauth/id-token-payload.model';
import { JWKS } from '../models/oauth/jwks.model';
import { KeyLikeCallback } from '../models/oauth/key-like-callback.type';
import { Tokens } from '../models/oauth/tokens.model';
import { UserInfo } from '../models/oauth/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly stateKey = 'pet-auth-state';
  private readonly challengeKey = 'pet-auth-challenge';
  private readonly desiredScopes =
    'openid profile email jcpets:roles jcpets:pets:write';
  tokens: Tokens;
  userInfo: UserInfo;

  constructor(
    private readonly http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public login(): Observable<unknown> {
    return this.authorize('login consent');
  }

  public consent(): Observable<unknown> {
    return this.authorize('consent');
  }

  public handleAuthorizeResponse(
    authorizeResponse: AuthorizeResponse
  ): Observable<Tokens> {
    return iif(
      () => !!authorizeResponse.code,
      of({}).pipe(
        tap(() => this.verifyStateMatches(authorizeResponse.state)),
        mergeMap(() => this.getTokens(authorizeResponse.code)),
        mergeMap((tokens) =>
          iif(
            () => !!tokens.id_token,
            this.verifyToken<IdTokenPayload>(tokens.id_token).pipe(
              map((payload) => {
                tokens.id_token_payload = payload;
                return tokens;
              })
            ),
            of(tokens)
          )
        ),
        tap((tokens) => {
          this.tokens = tokens;
        })
      ),
      throwError(() => new AuthorizeCallbackError(authorizeResponse.error))
    );
  }

  private verifyStateMatches(receivedState: string): void {
    const storedState = this.getState();
    if (storedState !== receivedState) {
      throw new InvalidStateError();
    }
  }

  private getTokens(code: string): Observable<Tokens> {
    return this.http
      .post<Tokens>('/token', {
        code,
        grant_type: 'authorization_code',
        redirect_uri: environment.redirectUri,
        client_id: environment.clientId,
        code_verifier: this.getChallenge().code_verifier,
      })
      .pipe(catchError((e) => throwError(() => new TokenRetrievalError(e))));
  }

  private verifyToken<T>(token: string): Observable<T> {
    return this.getKeyLike().pipe(
      mergeMap((keylike) =>
        from(jose.jwtVerify(token, keylike)).pipe(
          map((result) => result.payload as T),
          catchError((e) => throwError(() => new InvalidTokenError(e)))
        )
      )
    );
  }

  private getKeyLike(): Observable<KeyLikeCallback> {
    return this.http.get<JWKS>('/keys').pipe(
      map((jwks) => jose.createLocalJWKSet(jwks)),
      catchError((e) => throwError(() => new InvalidJwkError(e)))
    );
  }

  private authorize(prompt: string): Observable<unknown> {
    this.setState();
    const state = this.getState();
    return from(pkceChallenge()).pipe(
      tap((challenge) => {
        this.setChallenge(challenge);
      }),
      mergeMap((challenge) => {
        return this.http.get('/authorize', {
          observe: 'response',
          responseType: 'text',
          withCredentials: true,
          params: {
            client_id: environment.clientId,
            response_type: 'code',
            scope: this.desiredScopes,
            prompt,
            state,
            code_challenge: challenge.code_challenge,
            code_challenge_method: 'S256',
          },
        });
      }),
      catchError((e) => throwError(() => new AuthorizeError(e))),
      tap((res: { url?: string }) => {
        if (res.url) {
          this.document.location.href = res.url;
        }
      })
    );
  }

  private setState(state = uuidv4()): void {
    localStorage.setItem(this.stateKey, state);
  }

  private getState(): string {
    return localStorage.getItem(this.stateKey);
  }

  private setChallenge(challenge: Challenge): void {
    localStorage.setItem(this.challengeKey, JSON.stringify(challenge));
  }

  private getChallenge(): Challenge {
    return JSON.parse(localStorage.getItem(this.challengeKey));
  }
}
