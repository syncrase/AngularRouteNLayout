import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFootable1 } from './footable1.model';

type EntityResponseType = HttpResponse<IFootable1>;

@Injectable({
  providedIn: 'root'
})
export class Footable1Service {

  public resourceUrl = 'http://localhost:4200';

  constructor(protected http: HttpClient) { }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IFootable1>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }


}
