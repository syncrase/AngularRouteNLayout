import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { mergeScan, repeat } from 'rxjs/operators';
import { fromEvent, EMPTY, defer, concat } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

const baseUrl = 'http://127.0.0.1:4001/list-data?page=';

@Component({
    selector: 'app-merge-scan-demo',
    templateUrl: './merge-scan-demo.component.html',
    styleUrls: ['./merge-scan-demo.component.scss']
})
export class MergeScanDemoComponent implements OnInit, OnDestroy {
    public items: number[] = [1, 2, 3, 4, 5];
    @ViewChild('moreButton') moreButton: ElementRef;
    public disableMoreButton = false;
    private itemsSubscription: Subscription;

    constructor() {
    }

    ngOnInit() {

        // this.itemsSubscription = this.getItems().subscribe((result: any) => {
        this.itemsSubscription = this.getItemsWithPrefetchPages(2).subscribe((result: any) => {

            this.items = this.items.concat(result.response.data);

            if (!('nextIndex' in result.response)) {
                this.disableMoreButton = true;
            }
        });
    }

    ngOnDestroy() {
        this.itemsSubscription.unsubscribe();
    }

    getItems() {
        const fetchMoreEvents$ = fromEvent(this.moreButton.nativeElement, 'click');

        return fetchMoreEvents$.pipe(
            // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeScan
            mergeScan((accumulator, next) => {
                if ('nextIndex' in accumulator.response) {
                    return ajax.get(baseUrl + accumulator.response.nextIndex);
                }
                return EMPTY;
            },
                { response: { nextIndex: 1 } }, // Initial acc value
                1 // Maximum concurrency, 1 - to prevent race conditions
            )
        );
    }

    /**
     *
     * @param prefetchPages This method is only executed on init.
     * The rest of the time, only created Observables are in action
     */
    getItemsWithPrefetchPages(prefetchPages: number) {

        const initialData$ = this.getInitialData(prefetchPages);
        // console.log(initialData$);

        const fetchMoreEvents$ = fromEvent(this.moreButton.nativeElement, 'click');

        const moreItems$ = fetchMoreEvents$.pipe(
            mergeScan((prevAjaxResponse, next) => {
                if ('nextIndex' in prevAjaxResponse.response) {
                    return ajax.get(baseUrl + prevAjaxResponse.response.nextIndex);
                }
                return EMPTY;
            },
                { response: { nextIndex: prefetchPages } }, // Initial acc value
                1 // Maximum concurrency, 1 - to prevent race conditions
            )
        );

        return concat(initialData$, moreItems$);
    }

    getInitialData(prefetchPages: number) {
        let counter = 0;
        return defer(() => ajax.get(baseUrl + counter++))
            .pipe(repeat(prefetchPages)); // The 'repeat' pipe allow to reproduce the request 'n' times
    }

}
