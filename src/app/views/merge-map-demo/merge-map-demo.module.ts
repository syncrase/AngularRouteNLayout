import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeMapDemoComponent } from './merge-map-demo.component';
import { mergeMapDemoRoute } from './merge-map-demo.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ MergeMapDemoComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(mergeMapDemoRoute)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MergeMapDemoModule { }
