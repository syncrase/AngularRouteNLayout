import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(HOME_ROUTE)
  ]
  // ,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
