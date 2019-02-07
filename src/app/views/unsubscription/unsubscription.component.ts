import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unsubscription',
    templateUrl: './unsubscription.component.html',
    styleUrls: ['./unsubscription.component.css']
})
export class UnsubscriptionComponent implements OnInit {
    public items: any[] = [];

    constructor() { }

    ngOnInit() {
    }

    public destroyClick() {
        this.items = [];
    }

    public createClick() {
        this.items = Array.from({ length: 10 }).map((u, i) => i); // fill with values
        console.log('this.items', this.items);
    }

}
