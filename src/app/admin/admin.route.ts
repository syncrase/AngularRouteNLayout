import { RouterModule, Routes } from '@angular/router';

import { AdminComponent, DashboardComponent } from './';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';


export const adminRoute: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: '',
        children: [
          {
            path: 'yo',
            component: DashboardComponent
          }
        ]
      }
    ]
  }
];

