import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RouterModule } from '@angular/router';
import { rxjsRoute } from './rxjs.route';

@NgModule({
  declarations: [RxjsComponent],
  imports: [
    // CommonModule
    RouterModule.forChild(rxjsRoute)
  ]
})
export class RxjsModule { }
