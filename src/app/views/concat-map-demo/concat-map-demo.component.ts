import { Component, OnDestroy, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { forkJoin, of, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'app-concat-map-demo',
    templateUrl: './concat-map-demo.component.html',
    styleUrls: ['./concat-map-demo.component.scss']
})
export class ConcatMapDemoComponent implements OnInit, OnDestroy {
    public items: any[] = [
        { id: 1, value: 'item1' },
        { id: 2, value: 'item2' },
        { id: 3, value: 'item3' }
    ];
    public deleteSubject = new Subject();
    private subscription: Subscription;

    public deleteItems$ = this.deleteSubject.asObservable().pipe(
        /**
             * http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-concatMap
             *
             *
             */
        concatMap(
            (id, index) => {
                console.log('(deleteItems$#concaptMap) id : ' + id + ', index : ' + index);
                // On the second deletion, index === 1
                if (index === 1) {
                    return this.deleteItem(id).pipe(delay(2000));
                }
                return this.deleteItem(id);
            },
            null) // selector function - we don't need it here.
    );

    constructor() {
    }

    ngOnInit() {

        this.subscription = this.deleteItems$.subscribe((response) => {
            console.log(response);

            // Find the item in the itemList and remove it
            const index = this.items.findIndex((item) => response.id === item.id);
            this.items.splice(index, 1);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    deleteItem(id) {
        console.log('(deleteItem) id: ' + id);
        // return ajax.post(deleteUrl, headers, {id})
        return of({ id, success: true });
        // .pipe(delay(2000));
    }

    deleteAllClick() {
        // Get an array of observables containing items id
        const ids = this.items.map((item) => item.id);
        // Emits observables for each id contained in the array of observable 'ids'
        const arrayOfObservables = ids.map((id) => this.deleteItem(id));
        // console.log('between deleteItems and forkjoin');
        // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-forkJoin
        // Join last values emitted by each observables of the arrayOfObservables
        forkJoin(arrayOfObservables).subscribe((responses) => {
            responses.forEach((response) => {
                const index = this.items.findIndex((item) => response.id === item.id);
                this.items.splice(index, 1);
            });
        });
    }
}
