import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconLink } from '../../../models/ui/icon-link.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly homeLink: IconLink = {
    action: () => this.router.navigate(['/home']),
    toolTip: 'home',
    ariaLabel: 'home',
    icon: 'home',
  };
  readonly loginLink: IconLink = {
    action: () => {
      this.authService.login().subscribe();
    },
    toolTip: 'login',
    ariaLabel: 'login',
    icon: 'login',
  };

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}
}
