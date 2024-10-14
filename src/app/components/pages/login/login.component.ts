import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, catchError, finalize, mergeMap, of, tap } from 'rxjs';
import { CodedError } from '../../../models/error/coded.error';
import { AuthService } from '../../../services/auth.service';

interface QueryParams {
  code?: string;
  error?: string;
  state?: string;
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../../styles.scss'],
})
export class LoginComponent implements OnInit {
  finalizingAuth: boolean;
  error: HttpErrorResponse | string;

  constructor(
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    const queryParams: QueryParams = this.route.snapshot.queryParams;
    if (queryParams.code) {
      of({})
        .pipe(
          tap(() => {
            this.finalizingAuth = true;
            this.authService.verifyStateMatches(queryParams.state);
          }),
          mergeMap(() => this.authService.getTokens(queryParams.code)),
          catchError((e) => {
            this.error = e;
            return EMPTY;
          }),
          finalize(() => (this.finalizingAuth = false))
        )
        .subscribe();
    } else if (queryParams.error) {
      this.error = queryParams.error;
    }
  }

  getErrorDescription(
    error: CodedError | HttpErrorResponse | string | unknown
  ) {
    if (typeof error === 'string') {
      return this.getErrorDescriptionFromCode(error);
    } else if (this.isHttpErrorResponse(error)) {
      return this.getErrorDescriptionFromCode(error.error.error);
    } else if (this.isErrorWithCode(error)) {
      return this.getErrorDescriptionFromCode(error.code);
    }
    return this.getErrorDescriptionFromCode(undefined);
  }

  private getErrorDescriptionFromCode(error: string): string {
    const errorDescriptionMapping = new Map<string, string>([
      [
        'consent_required',
        'In order to login successfully, you must provide consent for at least one scope.',
      ],
    ]);
    return (
      errorDescriptionMapping.get(error) ||
      'An error occurred while logging in. Please try again later.'
    );
  }

  private isHttpErrorResponse(error: {
    error?: unknown;
  }): error is HttpErrorResponse {
    return !!error.error;
  }

  private isErrorWithCode(error: { code?: unknown }): error is CodedError {
    return !!error.code;
  }
}
