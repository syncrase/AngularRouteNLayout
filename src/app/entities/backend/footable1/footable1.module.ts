import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  Footable1BarPopupComponent,
  Footable1BarDialogComponent,
  Footable1Component,
  footable1Route,
  footable1PopupRoute
} from './';

const ENTITY_STATES = [...footable1Route, ...footable1PopupRoute];

@NgModule({
  imports: [
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    Footable1BarPopupComponent,
    Footable1BarDialogComponent,
    Footable1Component
  ],
  entryComponents: [
    Footable1BarPopupComponent,
    Footable1BarDialogComponent,
    Footable1Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Footable1Module { }
