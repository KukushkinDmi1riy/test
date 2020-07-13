import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.scss']
})
export class JsonToCSVComponent implements OnInit , OnChanges {

  constructor( private dataService: DataService ) { }

  @Input() finalD: any;

  ngOnInit(): void {
  }

  jsonData =  [
    {
      name: "Anil Singh",
      age: 33,
      average: 98,
      approved: true,
      description: "I am active blogger and Author."
    },
    {
      name: 'Reena Singh',
      age: 28,
      average: 99,
      approved: true,
      description: "I am active HR."
    },
    {
      name: 'Aradhya',
      age: 4,
      average: 99,
      approved: true,
      description: "I am engle."
    },
  ];


  keyz = [];

  ngOnChanges(){

    let arrOfObj=JSON.parse(this.finalD)

    let newVal = arrOfObj.reduce((acc, item)=> {
      // return Object.assign(acc, item)
      return acc = {...acc, ...item}
    }, [])

    this.keyz = Object.keys(newVal)

    console.log(this.keyz)
  }


  exportAsCSV() {

  console.log( 'JSONDATA', this.jsonData);

    // console.log("пришло в CSV ", JSON.parse(this.finalD));


    this.dataService.downloadFile(JSON.parse(this.finalD), this.keyz,  'jsontocsv')


  }




}
