import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import {
    PriceSwitcherComponent,
    PriceComponent,
    CoefficientSwitcherComponent,
    CitySwitcherComponent,
    priceSwitcherRoutes
} from './';
import { citySwitcherReducer, coefficientSwitcherReducer } from './';

const reducers = {
    cityPrice: citySwitcherReducer,
    coefficient: coefficientSwitcherReducer
};

@NgModule({
    declarations: [
        PriceSwitcherComponent,
        PriceComponent,
        CoefficientSwitcherComponent,
        CitySwitcherComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(priceSwitcherRoutes),
        StoreModule.forRoot(reducers)
    ]
})
export class PriceSwitcherModule { }
