
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Footable2Service } from './footable2.service';
import { IFootable2, Footable2 } from './footable2.model';
import { Footable2Component } from './footable2.component';
import { Footable2BarPopupComponent } from './footable2-bar-dialog.component';

@Injectable({ providedIn: 'root' })
export class Footable2Resolve implements Resolve<IFootable2> {
  constructor(private service: Footable2Service) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Footable2> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Footable2>) => response.ok),
        map((footable2: HttpResponse<Footable2>) => footable2.body)
      );
    }
    return of(new Footable2());
  }
}


export const footable2Route: Routes = [
  {
    path: 'footable2',
    component: Footable2Component,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Footable2'
    }
    // canActivate: [UserRouteAccessService]
  }
];

export const footable2PopupRoute: Routes = [
  {
    path: 'footable2/:id/delete',
    component: Footable2BarPopupComponent,
    resolve: {
      footable2: Footable2Resolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Footable2'
    },
    // canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
