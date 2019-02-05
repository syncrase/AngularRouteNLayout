import { Component, OnInit } from '@angular/core';
import { HttpService } from './HttpService/http.service';
import { take, tap } from 'rxjs/operators';
import { zip } from 'rxjs';

@Component({
    selector: 'app-price-switcher',
    templateUrl: './price-switcher.component.html',
    styleUrls: ['./price-switcher.component.css']
})
export class PriceSwitcherComponent implements OnInit {
    public widgetsVisibility = false;
    public citiesObject: any = {};
    public coefficientsList: number[] = [];

    constructor(private httpService: HttpService) {
    }
    /**
     * http://reactivex.io/documentation/operators/zip.html
     * http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-zip
     * https://www.learnrxjs.io/operators/combination/zip.html
     *
     */
    ngOnInit() {
        const citiesObject$ = this.httpService.getCitiesInfo();
        const coefficientsList$ = this.httpService.getTaxCoefficients();


        // Zip will
        // Combines multiple Observables to create an Observable whose values are calculated from the values,
        // in order, of each of its input Observables.
        zip(citiesObject$, coefficientsList$)
            .pipe(take(1))
            .subscribe(([citiesObject, coefficientsList]) => {
                // Display widgets when data are received
                this.widgetsVisibility = true;
                this.citiesObject = citiesObject;
                this.coefficientsList = coefficientsList;
            });
    }
}
