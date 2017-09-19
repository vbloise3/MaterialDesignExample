import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

let theElements: Array<string> = ['Hydrogen'];
let service: string = 'http://localhost:3000/tableData/vince';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable()
export class TableDataService {

  constructor(private http: Http) { }

  get() {
    return theElements;
  }

  add(element) {
    theElements.push(element);
  }

  load() {
    return this.http.get(service);
  }

}

