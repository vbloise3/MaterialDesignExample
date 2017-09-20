import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdTableModule} from '@angular/material';

import { TableDataService } from './services/table-data.service';

import {BasicComponent} from './basic/basic.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, BasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdTableModule
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
