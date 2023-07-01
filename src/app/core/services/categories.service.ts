import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root',
})

export class CategoriesService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<string[]>(`${environment.apiUrl}/products/categories`);
  }
}
