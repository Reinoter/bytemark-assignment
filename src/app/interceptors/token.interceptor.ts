/* External imports */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


/* Interceptor to add authentication token to Authorization header for all request. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  auth_token:string;
  constructor() {
      this.auth_token = "04fca36e9b5749c889b93c67adb2c8cf";
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Updating header adding token
    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth_token}`
        }
      })
    );
  }
}
