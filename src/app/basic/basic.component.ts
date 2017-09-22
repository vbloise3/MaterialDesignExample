import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableDataService, Element} from '../services/table-data.service';
import {getOverloadKey} from 'tslint/lib/rules/adjacentOverloadSignaturesRule';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'basic-component',
  styleUrls: ['./basic.component.css'],
  templateUrl: './basic.component.html',
})
export class BasicComponent implements OnInit {
  elements: Array<Element>;
  symbols: Array<Element>;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: ExampleDataSource;

  constructor(public service: TableDataService ) {
    this.dataSource = new ExampleDataSource(service);
    /*this.service.get2().subscribe(dataReceived => {
      this.symbols = dataReceived;
      // console.log(this.symbols[0].name + ' ' + this.symbols[1].name + ' symbols loaded at ' + new Date());
      // this.dataSource.loadTheElements();
    });*/
  }

  ngOnInit() {
    /*this.service.get2().subscribe(dataReceived => {
      this.elements = dataReceived;
      // console.log(this.elements[0].name + ' ' + this.elements[1].name + ' elements loaded at ' + new Date());
      // this.service.load(this.symbols).subscribe(elements => this.data = elements);
    });*/
  }
}

const endpoint = 'http://localhost:3000/elementData/vince';
// const data2: Element[] = BasicComponent.http.get(endpoint);

let data: Element[];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  service: TableDataService;
  elements: Array<Element>;
  symbols: Array<Element>;
  stuff: Observable<any>;

  // data: Element[];

  constructor(service: TableDataService) {
    super();
    this.service = service;
    /*this.service.get2().subscribe(dataReceived => {
      data = dataReceived;
      // console.log(data.length + ' data elements loaded at ' + new Date());
    });*/
  }

  public loadTheElements() {
    this.service.get2().subscribe(dataReceived => {
      data = dataReceived;
      console.log(data.length + ' data elements loaded at ' + new Date());
    });
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    this.service.get2().subscribe(dataReceived => {
      data = dataReceived;
      // console.log(data.length + ' data elements from DataSource loaded at ' + new Date());
      this.stuff = Observable.of(data)
    });
    // console.log('returning Observable.of(data)');
    return this.stuff; // Observable.of(data);
  }

  disconnect() {}
}
