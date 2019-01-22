import { RouterModule, Routes } from '@angular/router';

import { AdminComponent, DashboardComponent, dashboardRoute } from './';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

const ADMIN_ROUTES = [dashboardRoute];

export const adminRoute: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [UserRouteAccessService],
    children: ADMIN_ROUTES
  }
];

