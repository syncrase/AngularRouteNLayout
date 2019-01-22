import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  Footable2BarDialogComponent,
  Footable2BarPopupComponent,
  Footable2Component,
  footable2Route,
  footable2PopupRoute
} from './';

const ENTITY_STATES = [...footable2Route, ...footable2PopupRoute];


@NgModule({
  imports: [
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    Footable2BarDialogComponent,
    Footable2BarPopupComponent,
    Footable2Component
  ],
  entryComponents: [
    Footable2BarPopupComponent,
    Footable2BarDialogComponent,
    Footable2Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Footable2Module { }
