import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFootable2 } from './footable2.model';

type EntityResponseType = HttpResponse<IFootable2>;

@Injectable({
  providedIn: 'root'
})
export class Footable2Service {

  public resourceUrl = 'http://localhost:4200';

  constructor(protected http: HttpClient) { }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IFootable2>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }


}
