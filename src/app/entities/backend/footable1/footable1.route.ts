
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Footable1Service } from './footable1.service';
import { IFootable1, Footable1 } from './footable1.model';
import { Footable1Component } from './footable1.component';
import { Footable1BarPopupComponent } from './footable1-bar-dialog.component';

@Injectable({ providedIn: 'root' })
export class Footable1Resolve implements Resolve<IFootable1> {
  constructor(private service: Footable1Service) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Footable1> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Footable1>) => response.ok),
        map((footable1: HttpResponse<Footable1>) => footable1.body)
      );
    }
    return of(new Footable1());
  }
}


export const footable1Route: Routes = [
  {
    path: 'footable1',
    component: Footable1Component,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Footable1'
    }
    // canActivate: [UserRouteAccessService]
  },
  {
    path: 'test',
    component: Footable1Component,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Footable1'
    },
    outlet: 'second'
    // canActivate: [UserRouteAccessService]
  }
];

export const footable1PopupRoute: Routes = [
  {
    path: 'footable1/:id/delete',
    component: Footable1BarPopupComponent,
    resolve: {
      footable1: Footable1Resolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'footable1'
    },
    // canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
