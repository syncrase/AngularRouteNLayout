import { Injectable } from '@angular/core';
// import { JhiEventManager } from 'ng-jhipster';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  // observable: Observable<any>;
  // observer: Observer<any>;
  // private eventManager: JhiEventManager
  // constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Hello');
    window.alert('Hello 2');

    // const modified = request.clone({setHeaders: {'Custom-Header-1': '1'}});

    return next.handle(request);

    // return next.handle(request).pipe(
    //   tap(
    //     (event: HttpEvent<any>) => {
    //       if (event instanceof HttpResponse) {
    //         console.log('---> status:', event.status);
    //         console.log('---> filter:', event.body.params.get('filter'));
    //       }
    //     },
    //     (err: any) => {
    //       console.log('Hi there');
    //       window.alert('Hi there 2');
    //       if (err instanceof HttpErrorResponse) {
    //         if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
    //           // this.eventManager.broadcast({ name: 'gateway2App.httpError', content: err });
    //         }
    //       }

    //     }
    //   )
    // );

    // return next.handle(request).do((event: HttpEvent<any>) => { }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     // do error handling here
    //   }
    // });

  }
}
