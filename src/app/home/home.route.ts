import { Routes } from '@angular/router';

import { HomeComponent } from './';

export const HOME_ROUTE: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      authorities: [],
      pageTitle: 'Home module!'
    }
  }
  // ,
  // {
  //   path: '',
  //   component: HomeComponent,
  //   data: {
  //     authorities: [],
  //     pageTitle: 'Home module!'
  //   },
  //   outlet: 'second'
  // }
];
