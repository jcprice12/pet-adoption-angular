import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { catchError, of, tap } from 'rxjs';
import { UserInfo } from '../../../models/oauth/user-info.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrls: ['../../../../styles.scss', './profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  userInfo: UserInfo;
  isUserInfoComplete: boolean;
  error: Error;

  ngOnInit(): void {
    this.authService
      .getUserInfo()
      .pipe(
        tap((userInfo) => {
          this.userInfo = userInfo;
          this.isUserInfoComplete = this.authService.isUserInfoComplete();
        }),
        catchError((e) => {
          this.error = e;
          return of(null);
        })
      )
      .subscribe();
  }
}
