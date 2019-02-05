import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { delay, mergeMap, mergeMapTo, tap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';


const requestUrl = 'http://127.0.0.1:4001/merge-map-demo/request-data';
const responseUrl = 'http://127.0.0.1:4001/merge-map-demo/get-response?dataId=';

@Component({
  selector: 'app-merge-map-demo',
  templateUrl: './merge-map-demo.component.html',
  styleUrls: ['./merge-map-demo.component.scss']
})
export class MergeMapDemoComponent implements OnInit, OnDestroy {
  public items: number[] = [];
  @ViewChild('moreButton') moreButton: ElementRef;
  public disableMoreButton = false;
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {

    this.subscription = this.getItems(requestUrl, 5, null).subscribe(
      (result: any) => {
        console.log('result ', result);
        this.items = result;
      },
      (err: any) => console.warn(err.message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getItems(url, maxCounter, dataId) {
    if (maxCounter === 0) {
      return throwError({ message: 'max retry count exceeded' });
    }

    /*
    * https://www.learnrxjs.io/operators/transformation/mergemap.html
    * http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap
    *
    */
    return ajax.get(url).pipe(
      mergeMap(
        (ajaxResponse$) => {
          console.log(ajaxResponse$);
          if ('dataId' in ajaxResponse$.response) { // first run
            dataId = ajaxResponse$.response.dataId;
            // Due to this request, the server begin to wait 3 seconds before to be ready. Check the server out!
            return this.getItems(responseUrl + dataId, maxCounter, dataId);
          }

          if (ajaxResponse$.response.ready) { // recursive run
            return of(ajaxResponse$.response.data);
          } else {
            return of(1).pipe(delay(1000), mergeMapTo(this.getItems(responseUrl + dataId, maxCounter - 1, dataId)));
          }
        },
        null, // selector function - we don't need it here.
        1), // Maximum concurrency, 1 - to prevent race conditions
    );
  }

}
