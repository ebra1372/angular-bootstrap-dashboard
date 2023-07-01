import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  constructor(private http: HttpClient) { }

  userLogin(model: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, model);
  }
};