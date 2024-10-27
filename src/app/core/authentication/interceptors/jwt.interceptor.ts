import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user$.pipe(
      take(1),
      switchMap((user) => {
        if (user) {
          return this.authService.getAccessTokenSilently().pipe(
            take(1),
            switchMap((accessToken) => {
              const clonedRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${accessToken}`,
                },
                body: {
                  ...request.body,
                },
              });

              return next.handle(clonedRequest);
            }),
            catchError((error) => {
              console.error(error);
              return next.handle(request);
            })
          );
        } else {
          return next.handle(request);
        }
      })
    );
  }
}
