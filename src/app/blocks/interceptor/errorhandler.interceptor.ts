import { Injectable } from '@angular/core';
// import { JhiEventManager } from 'ng-jhipster';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  // constructor() { }

  //
  // https://angular.io/guide/http#provide-the-interceptor
  // used to handle outgoing requests
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // console.log('Hello');

    const modified = request.clone({setHeaders: {'Custom-Header-1': '1'}});
    const secureReq = modified.clone({
      url: modified.url.replace('http://', 'https://')
    });
    // return next.handle(request);

    return next.handle(secureReq).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('---> status:', event.status);
            console.log('---> filter:', event.body.params.get('filter'));
          }
        },
        (err: any) => {
          console.log('Hi there');
          if (err instanceof HttpErrorResponse) {
            if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
              // this.eventManager.broadcast({ name: 'gateway2App.httpError', content: err });
            }
            if (!(err.status === 404 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
              // this.eventManager.broadcast({ name: 'gateway2App.httpError', content: err });

              console.log('Erreur 404 !! ');
            }
          }

        }
      )
    );

    // return next.handle(request).do((event: HttpEvent<any>) => { }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     // do error handling here
    //   }
    // });

  }
}
