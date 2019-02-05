import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { stepSwitcherViewRoute } from './';
import { StepSwitcherViewComponent } from './';
import { StepSwitcherComponent, CounterComponent } from './';
import { stepSwitcherReducer } from './step-switcher/step-switcher.reducer';

const reducers = {
  stepValue: stepSwitcherReducer
};

@NgModule({
  declarations: [
    StepSwitcherViewComponent,
    StepSwitcherComponent,
    CounterComponent
  ],
  imports: [
    RouterModule.forChild(stepSwitcherViewRoute),
    StoreModule.forRoot(reducers)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StepSwitcherViewModule { }
