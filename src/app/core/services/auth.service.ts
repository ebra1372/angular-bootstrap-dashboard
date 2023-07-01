import { Injectable } from '@angular/core';
import { StorageService } from 'services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private storageSerive: StorageService) { }

  public isAuthenticated(): boolean {
    const token = this.storageSerive.getUserToken();
    return token ? true : false
  }
};