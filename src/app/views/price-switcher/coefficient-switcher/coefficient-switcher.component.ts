import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SAVE_COEFFICIENT } from './coefficient-switcher.reducer';
import { SAVE_CITY_PRICE } from '../city-switcher/city-switcher.reducer';

@Component({
    selector: 'app-coefficient-switcher',
    templateUrl: './coefficient-switcher.component.html',
    styleUrls: ['./coefficient-switcher.component.scss']
})
export class CoefficientSwitcherComponent implements OnInit {
    public activeIndex = 0;
    @Input() public coefficientsList: any[];

    constructor(private store: Store<any>) { }

    ngOnInit() {
        // this.store.dispatch({
        //     type: SAVE_COEFFICIENT,
        //     payload: this.coefficientsList[0]
        // });
        this.setCoefficientValue(this.coefficientsList[0], 0);
    }

    setCoefficientValue(value, index) {
        this.store.dispatch({
            type: SAVE_COEFFICIENT,
            payload: value
        });
        this.activeIndex = index;
    }
}
