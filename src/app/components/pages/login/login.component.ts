import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, finalize, mergeMap, of, tap } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../../styles.scss'],
})
export class LoginComponent implements OnInit {
  queryParams: { code?: string; error?: string };
  finalizingAuth: boolean;
  error: HttpErrorResponse | string;

  constructor(
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    if (this.queryParams.code) {
      of({})
        .pipe(
          tap(() => (this.finalizingAuth = true)),
          mergeMap(() => this.authService.getTokens(this.queryParams.code)),
          catchError((e) => {
            this.error = e;
            return of({});
          }),
          finalize(() => (this.finalizingAuth = false))
        )
        .subscribe();
    } else if (this.queryParams.error) {
      this.error = this.queryParams.error;
    }
  }

  getErrorDescription(error: HttpErrorResponse | string) {
    if (typeof error === 'string') {
      return this.getErrorDescriptionFromCode(error);
    }
    return this.getErrorDescriptionFromCode(error.error.error);
  }

  getErrorDescriptionFromCode(error: string): string {
    const errorDescriptionMapping = new Map<string, string>([
      [
        'consent_required',
        'In order to login successfully, you must provide consent for at least one scope.',
      ],
    ]);
    return (
      errorDescriptionMapping.get(error) ||
      'An unknown error occurred while logging in. Please try again later.'
    );
  }
}
