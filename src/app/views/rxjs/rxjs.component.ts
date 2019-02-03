import { Component, OnInit } from '@angular/core';
import { Observable, of, defer, throwError, empty, from, fromEvent, interval, Subject, ReplaySubject, timer } from 'rxjs';
import { switchMap, map, take, publish, publishReplay, catchError, distinctUntilChanged, distinct, distinctUntilKeyChanged, scan, bufferCount, bufferTime, buffer, bufferWhen, bufferToggle, concatAll, debounceTime, filter } from 'rxjs/operators';
// import { $ } from 'protractor';
import { makeBindingParser } from '@angular/compiler';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  /*

  Tutorial video
  https://subscription.packtpub.com/video/web_development/9781788838429/90941/94794/forking-rxjs-playground-on-jsfiddle

  Example code
  https://github.com/PacktPublishing/Hands-on-RxJS-for-Web-development/tree/Section1_Video3_Angular_demo_project_starter

  Try out
  https://codepen.io/kievsash/pen/wxKVYW
  https://rxviz.com/

  Official documentation
  http://reactivex.io/documentation/operators.html#creating
  https://www.learnrxjs.io/

  */
  constructor() { }

  ngOnInit() {
    this.createObservable();
  }

  // subscribeObservable() {
  //   // subscribe with lazy evaluation (don't run until subscribed)
  //   const subscription = Observable.create([0, 1, 2]).subscribe(
  //     (data) => dataHandlerFunction(data), // onNext
  //     (err) => eroorHandlerFunction(err), // onError
  //     () => completeHandlerFunction(data), // oncomplete
  //   );
  //   subscription.unsubscribe();
  // }

  // dataHandlerFunction(data: any) {

  // }

  /**************************************************************************** */
  createObservable() {
    let observable = Observable.create((observer) => {
      let id = setInterval(() => {
        observer.next('hi');
        // observer.complete()
      }, 1000);
    });

    observable.subscribe(
      console.log, // onNext
      console.warn, // onError
      () => console.log('completeHandler') // onComplete
    ); // hi hi hi
  }


  /**************************************************************************** */

  observableFactory(n) {
    return of(n);
  }

  tryIt() {
    let counter = 0;
    let source$ = defer(() => this.observableFactory(counter++));

    source$.subscribe((data) => console.log('1: ', data));
    source$.subscribe((data) => console.log('2: ', data));

  }


  /**************************************************************************** */

  test() {
    const n = 0;
    of(13).pipe(
      switchMap(
        (data) => {
          if (n < 0) {
            return throwError({ error: 'message' });
          }
          if (n > 0) {
            return empty();
          }
          // return ajax('http://backend');
        }
      )
    ).subscribe(
      (data) => console.log(data), // affected by ajax success, but not empty
      (err) => console.warn(err), // affected by throwError
      // () => doOnSequenceCompletion(), // affected by ajax and empty
    );
  }



  /**************************************************************************** */

  test2() {
    let source1$ = of([0, 1, 2, 3, 4]);
    let source2$ = from([0, 1, 2, 3, 4]);
    let source3$ = from(source1$);
    let source4$ = of([0, 1, 2], 4);
    let source5$ = from(Promise.resolve(42));

    let subscription1 = source1$.subscribe((data) => console.log('next value: ', data));
    let subscription2 = source2$.subscribe((data) => console.log('source2$: ', data));
    let subscription3 = source3$.subscribe((data) => console.log('source3$: ', data));

    setTimeout(() => { subscription1.unsubscribe(); }, 5000);
  }



  /**************************************************************************** */

  test3() {
    let input = document.querySelector('#myinput');
    let source$ = fromEvent(input, 'keyup').pipe(
      map(e => (<HTMLTextAreaElement>e.target).value)
    );
    source$.subscribe(console.log);
  }



  /**************************************************************************** */

  test40() {
    // COLD
    let cold = new Observable((observer) => {
      // let producer = new Producer();
      // Have observer listen to producer here
    });

    // HOT
    // let producer = new Producer();
    let hot = new Observable((observer) => {
      // Have observer listen to producer here
    });

  }



  /**************************************************************************** */

  test4() {
    let source$ = interval(1000).pipe(take(3));

    source$.subscribe((data) => console.log('obs 1', data));
    setTimeout(() => {
      source$.subscribe((data) => console.log('obs 2', data));
    }, 2500);
  }

  test41() {
    let source$ = interval(1000).pipe(take(3), publish());
    // error TS2339: Property 'connect' does not exist on type 'Observable<any>'.
    // source$.connect();

    source$.subscribe((data) => console.log('obs 1', data));
    setTimeout(() => {
      source$.subscribe((data) => console.log('obs 2', data));
    }, 2500);
  }

  test42() {
    let source$ = interval(1000).pipe(take(3), publishReplay());
    // error TS2339: Property 'connect' does not exist on type 'Observable<number>'.
    // source$.connect();

    source$.subscribe((data) => console.log('obs 1', data));
    setTimeout(() => {
      source$.subscribe((data) => console.log('obs 2', data));
    }, 2500);
  }



  /**************************************************************************** */

  test5() {
    let source$ = new Subject();
    let counter = 0;

    setTimeout(() => source$.next(counter++), 2500);
  }



  /**************************************************************************** */

  test6() {
    let source$ = new Subject();
    // With the replay, observers can get all previously emitted values
    // let source$ = new ReplaySubject();
    // With the behaviour, observers can get last previously emitted values
    // let source$ = new BehaviourSubject(-1); // initial value
    // With the behaviour, observers get data atfer all previous emissions
    // let source$ = new AsyncSubject();
    let counter = 0;

    let clearId = setInterval(() => {
      console.log('source$ value', counter);
      source$.next(counter++);
    }, 1000);

    source$.subscribe((data) => console.log('observer 1', data));
    setTimeout(() => source$.next(counter++), 2500);

    setTimeout(() => {
      source$.subscribe((data) => console.log('observer 2', data));
    }, 2500);

    setTimeout(() => {
      source$.complete();
      clearInterval(clearId);
    }, 5000);
  }



  /**************************************************************************** */

  provideObservableSequence() {
    let source$ = new Subject();
    let counter = 0;

    // In order to be sure that the next() method won't be called in other place
    setInterval(() => {
      if (counter < 3) {
        source$.next(counter++);
        return;
      }
      source$.complete();
    }, 2500);
    return source$.asObservable();
  }



  /**************************************************************************** */

  catchErrorTest() {

    // try it by run first just the error and then the catch
    interval(500).pipe(
      take(4),
      map(x => {
        if (x === 2) {
          throw { code: 404, message: 'not found' };
        }
        return x;
      }),
      // Allow to continue the execution chain if an error occured
      catchError(err => of(100))
    )
      .subscribe(
        (data) => console.log('onNext', data),
        (err) => console.log('onError', err)
      );


  }



  /**************************************************************************** */

  distinctTest() {


    from([{ v: 1 }, { v: 2 }, { v: 2 }, { v: 3 }, { v: 2 }])
      // .pipe(distinctUntilChanged());
      .pipe(
        // distinctUntilChanged()
        // distinctUntilChanged((prev, next) => prev.v === next.v)
        // distinctUntilChanged(null, (item) => item.v)
        // distinct((item) => item.v)
        distinctUntilKeyChanged('v')
      ).subscribe(
        (data) => console.log('onNext', data),
        (err) => console.log('onError', err)
      );

  }



  /**************************************************************************** */

  scanTest() {


    from([1, 2, 3, 4])
      .pipe(
        scan((acc, next) => (acc + next), 0),
        map((x, index) => x / (index + 1))
      );
    // .subscribe(
    //   (data) => console.log('onNext', data),
    //   (err) => console.log('onError', err)
    // );

  }



  /**************************************************************************** */

  bufferTest() {
    const sourceInterval$ = timer(0, 1000); // emit value every second

    // const closingNotifiers$ = interval(3000);
    const startInterval$ = interval(5000);
    // const closingIntervalFactory = (val) => interval(5000);
    let counter = 1;
    // emit value after 3s
    const closingIntervalFactory = (val) => counter++ % 2 ? interval(5000) : empty();


    const buffered$ = sourceInterval$.pipe(
      // bufferCount(2, 2) // bufferSize equals StartBufferEvery
      // bufferCount(3, 2) // bufferSize bigger than StartBufferEvery => overlaped values
      // bufferCount(2, 3) // bufferSize bigger than StartBufferEvery => missed values
      // bufferTime(3000) // emit all values emited in the time elapsed
      // buffer(closingNotifiers$)
      // bufferWhen(() => {
      //   console.log('Call function');
      //   return interval(1000 + Math.random() * 4000);
      // })
      bufferToggle(
        startInterval$,
        closingIntervalFactory
      )
    );
    buffered$.subscribe(x => console.log(x));
  }



  /**************************************************************************** */

  flatteningTest() {
    const input$ = from(['url1', 'url2', 'url3']); // emit value every second


    const output$ = input$.pipe(
      // map((url) => ajax(url)), // Emits Observables
      concatAll() // Emit values
    );
    // output$.subscribe(x => console.log(x));
  }



  /**************************************************************************** */

  // cf. https://github.com/PacktPublishing/Hands-on-RxJS-for-Web-development/tree/Section4_switchMap/src/app

  flatteningTest2() {
    const input$ = document.querySelector('#textInput');

    const output$ = fromEvent(input$, 'keyup').pipe(
      map(e => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 2),
      debounceTime(750),
      distinctUntilChanged(),
      // map((text) => this.makeWikiSearch(text)),
      // switchAll()
      switchMap((text) => this.makeWikiSearch(text))
      // switchMapTo(this.makeWikiSearch('test'))
    );
    // const result$ = $('#results-ul');
    // output$.subscribe(
    //   (response) => {
    //     const data = response[1];
    //     const listItems = data.map(str => $('<li>').text(str));
    //     result$.empty().append(listItems);
    //     result$.children().on('click', (event) => {
    //       (<HTMLInputElement>input$).value = event.target.innerHTML;
    //       result$.empty();
    //     });
    //   }
    // )


  }

  makeWikiSearch(value) {
    // return $.ajax({
    //   url: 'https://en.wikipedia.org/w/api.php',
    //   dataType: 'jsonp',
    //   data: {
    //     action: 'opensearch',
    //     format: 'json',
    //     search: value
    //   }
    // }).promise();
    return of([]);
  }


  /**************************************************************************** */
  // Code to try
  // The counter
  // https://gist.github.com/kievsash/c29c03768c8e3420944e6ad7211dea87



  /**************************************************************************** */
  // Code to try
  // Imbricated requests !!!
  // https://github.com/PacktPublishing/Hands-on-RxJS-for-Web-development/tree/Section4_mergeMap
  //
  // https://github.com/PacktPublishing/Hands-on-RxJS-for-Web-development/tree/Section4_mergeScan/src
  // All branch of section 4 are interest
  // concatMap
  // mergeMap





}
