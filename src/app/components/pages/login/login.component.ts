import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  queryParams: { code?: string };

  constructor(
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    if (this.queryParams.code) {
      this.authService.getToken(this.queryParams.code).subscribe();
    }
  }
}
