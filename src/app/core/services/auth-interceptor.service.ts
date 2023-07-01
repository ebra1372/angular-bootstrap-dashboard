import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageSerive: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageSerive.getUserToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}   