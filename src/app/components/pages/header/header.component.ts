import { Component } from '@angular/core';
import { IconLink } from 'src/app/models/ui/icon-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly homeLink: IconLink = {
    url: '/home',
    toolTip: 'home',
    ariaLabel: 'home',
    icon: 'home',
  };
  readonly loginLink: IconLink = {
    url: '/login',
    toolTip: 'login',
    ariaLabel: 'login',
    icon: 'account_circle',
  };
}
