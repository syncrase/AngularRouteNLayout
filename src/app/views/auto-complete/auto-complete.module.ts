import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
    AutoCompleteComponent,
    autoCompleteRoutes
} from './';

@NgModule({
    declarations: [AutoCompleteComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(autoCompleteRoutes),
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule
    ]
})
export class AutoCompleteModule { }
