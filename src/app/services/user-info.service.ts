import { Injectable, inject } from '@angular/core';
import { UserInfoError } from '../errors/user-info.error';
import { UserInfo } from '../models/oauth/user-info.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private readonly authService = inject(AuthService);

  public getUserInfo(): UserInfo | undefined {
    const tokens = this.authService.tokens;
    if (tokens) {
      return tokens.id_token_payload;
    }
    throw new UserInfoError('Oauth tokens are not instantiated.');
  }

  public isUserInfoComplete(userInfo: UserInfo | undefined): boolean {
    return !!(
      userInfo?.family_name &&
      userInfo.given_name &&
      userInfo.email &&
      userInfo['jcpets:roles']
    );
  }
}
