import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DummyComponent, UnsubscriptionComponent, unsubscriptionRoutes } from './';
// import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
    declarations: [
        UnsubscriptionComponent,
        DummyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(unsubscriptionRoutes)
        // ,
        // HttpClientModule,
        // HttpClientJsonpModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnsubscriptionModule { }
