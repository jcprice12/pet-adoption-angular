import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UIError } from '../../../errors/ui.error';
import { AuthorizeResponse } from '../../../models/oauth/authorize-response.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../../styles.scss'],
})
export class LoginComponent implements OnInit {
  finalizingAuth: boolean;
  error: Error;

  constructor(
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.finalizingAuth = true;
    const queryParams: AuthorizeResponse = this.route.snapshot.queryParams;
    this.authService.handleAuthorizeResponse(queryParams).subscribe({
      error: (e) => {
        this.error = e;
        this.finalizingAuth = false;
      },
      complete: () => {
        this.finalizingAuth = false;
      },
    });
  }

  getErrorDescription() {
    if (this.error instanceof UIError) {
      return this.error.description;
    }
    return 'An error occurred. Please try again later';
  }
}
