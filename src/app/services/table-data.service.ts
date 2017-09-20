import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

let elements: Array<string> = ['Hydrogen'];
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
    return elements;
  }

  add(element) {
    elements.push(element);
    return this.get();
  }

  load() {
    return this.http.get<Array<Element>>(service);
  }

}

