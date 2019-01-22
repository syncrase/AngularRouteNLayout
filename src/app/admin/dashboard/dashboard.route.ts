import { RouterModule, Route } from '@angular/router';

import { AdminComponent, DashboardComponent } from '../';

export const dashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent
};
