import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

let elements: Array<Element>;
let service: string = 'http://localhost:3000/elementData/vince';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable()
export class TableDataService {

  constructor(private http: HttpClient) { }

  get() {
    this.http.get<Element[]>(service).subscribe(data => {
      console.log(data);
      elements = data;
      console.log('get() - element #1 name: ' + elements[0].name);
      console.log('get() - element #1 symbol: ' + elements[0].symbol);
    });
    return elements;
  }

  get2(): any {

    return this.http.get<Element[]>(service).map( /// <<<=== use `map` here
      (response) => {
        const data = response; /*.toString() ? response[0].name : [{}];*/
        if (data) {
          elements = data;
        }
        return elements;
      }
    );
  }

  add(element) {
    // elements.push(element);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Element[]>(service).subscribe(data => {
        elements = data;
        console.log('load() - element #1 name: ' + elements[0].name);
        console.log('load() - element #1 symbol: ' + elements[0].symbol);
      });
    }
  }
}

