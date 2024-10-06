import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: string;

  public getToken() {
    return this.token;
  }

  public setToken(token: string) {
    this.token = token;
  }
}
