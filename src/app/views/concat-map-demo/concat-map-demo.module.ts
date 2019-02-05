import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    ConcatMapDemoComponent,
    concatMapDemoRoutes
} from './';

const routes = [...concatMapDemoRoutes];

@NgModule({
    declarations: [ConcatMapDemoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(concatMapDemoRoutes)
    ]
})
export class ConcatMapDemoModule { }
