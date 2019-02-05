import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeScanDemoComponent, mergeScanDemoRoutes } from './';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [MergeScanDemoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(mergeScanDemoRoutes)
    ]
})
export class MergeScanDemoModule { }
