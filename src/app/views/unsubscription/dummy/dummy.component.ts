import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit, OnDestroy {
  public value = 0;
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = interval(800).subscribe((value) => {
      console.log(value, this);
      this.value = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
