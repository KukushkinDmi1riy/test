import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TestTableComponent } from './components/test-table/test-table.component';
import { ResultComponent } from './components/result/result.component';
import { JsonToCSVComponent } from './components/json-to-csv/json-to-csv.component';


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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
