import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TestTableComponent } from './test-table/test-table.component';
import { ResultComponent } from './result/result.component';
import { JsonToCSVComponent } from './json-to-csv/json-to-csv.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TestTableComponent,
    ResultComponent,
    JsonToCSVComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
