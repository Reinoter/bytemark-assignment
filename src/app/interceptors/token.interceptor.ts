/* External imports */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

/* Project imports */
import { NewsService } from '@services';

/* Interceptor to add authentication token to Authorization header for all request. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public newsService: NewsService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Making sure authentication is set
    if(!this.newsService.auth_token) return next.handle(request);

    // Updating header adding token
    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.newsService.auth_token}`
        }
      })
    );
  }
}
