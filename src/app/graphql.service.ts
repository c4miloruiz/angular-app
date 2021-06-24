import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private http: HttpClient
  ) { }

  sum(a: number, b:number) {
    return a + b;
  }

  getTodos() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/', {})
    .pipe(
      map(response => response.map(item => {
        return {
          ...item,
          date: '2021-09-13'
        }
      })),
    );
  }
}
