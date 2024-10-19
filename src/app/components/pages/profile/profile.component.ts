import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UIError } from '../../../errors/ui.error';
import { UserInfo } from '../../../models/oauth/user-info.model';
import { AuthService } from '../../../services/auth.service';
import { UserInfoService } from '../../../services/user-info.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['../../../../styles.scss', './profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  userInfoService = inject(UserInfoService);
  userInfo: UserInfo | undefined;
  isUserInfoComplete: boolean | undefined;
  error: Error | undefined;

  ngOnInit(): void {
    try {
      this.userInfo = this.userInfoService.getUserInfo();
      this.isUserInfoComplete = this.userInfoService.isUserInfoComplete(
        this.userInfo
      );
    } catch (e) {
      this.error = e;
    }
  }

  getErrorDescription() {
    if (this.error instanceof UIError) {
      return this.error.description;
    }
    return 'There was an error retrieving your profile information. Please try again later.';
  }

  updateConsent() {
    this.authService.consent().subscribe();
  }
}
