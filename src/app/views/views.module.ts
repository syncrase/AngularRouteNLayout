import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsModule } from './rxjs/rxjs.module';
import { StepSwitcherViewModule } from './step-switcher-view/step-switcher-view.module';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RxjsModule,
    StepSwitcherViewModule
  ]
})
export class ViewsModule { }
