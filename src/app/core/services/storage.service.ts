import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() { }
  private userToken = "user_token";

  public getUserToken() {
    return localStorage.getItem(this.userToken);
  }

  public setUserToken(token: string) {
    localStorage.setItem(this.userToken, token);
  }

  public deleteUserToken() {
    localStorage.removeItem(this.userToken)
  }
}