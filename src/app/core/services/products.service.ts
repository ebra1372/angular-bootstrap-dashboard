import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";
import { Product } from 'models/product.model';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor(private http: HttpClient) { }

  getAll(limit: number | string = 0): Observable<any> {
    let queryString = limit ? `?limit=${limit}` : ""
    return this.http.get<Product[]>(`${environment.apiUrl}/products${queryString}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  create(product: Product): Observable<any> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product);
  }

  update(product: Product): Observable<any> {
    return this.http.put<Product>(`${environment.apiUrl}/products/${product.id}`, product);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`);
  }
}