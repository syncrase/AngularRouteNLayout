import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  request() {
    // const url = 'http://localhost:4200/bonjour';
    // this.response = this.http.get(url, { observe: 'body' });
    this.http.get('/bla').subscribe();
  }

}
