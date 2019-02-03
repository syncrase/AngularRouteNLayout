
import { Routes } from '@angular/router';

import { RxjsComponent } from './rxjs.component';

export const rxjsRoute: Routes = [
  {
    path: 'rxjs',
    component: RxjsComponent
  }
];

export const rxjsPopupRoute: Routes = [
  {
    path: 'rxjs',
    component: RxjsComponent,
    outlet: 'popup'
  }
];
