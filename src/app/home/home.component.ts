import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // response: Observable<any>;

  // private http: HttpClient
  constructor() { }

  ngOnInit() {
  }

  // request() {
  //   const url = 'http://localhost:8080/bonjour';
  //   this.response = this.http.get(url, { observe: 'body' });
  // }

}
