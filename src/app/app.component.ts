import { Component } from '@angular/core';
import { ArrOfObj } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convertor-app';

  rawData = [

  ];

  finalData = ""

  disabled=false;

  addTextToList(someText: Array<ArrOfObj>) {
    this.rawData = [
      ...this.rawData,
      ...someText
    ];
    console.log("rawData", this.rawData);
    this.disabled=true;
  }

  addResultToFinal(data: Array<ArrOfObj> ) {

    this.finalData = JSON.stringify(data)
    console.log("то что пойдёт в area", typeof(this.finalData))
  }


}
