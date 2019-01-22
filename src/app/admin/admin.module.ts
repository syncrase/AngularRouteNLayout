import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { adminRoute, AdminComponent, DashboardComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild(adminRoute)
  ],
  declarations: [
    DashboardComponent,
    AdminComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
