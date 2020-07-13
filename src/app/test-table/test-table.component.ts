import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ArrOfObj } from '../models';


@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit, OnChanges {

  @Input() data: ArrOfObj[];
  @Input() disabled: Boolean;

  @Output() onResultAdd = new EventEmitter<Array<any>>();

  keyz = [];

  ngOnChanges(){
    let newVal = this.data.reduce((acc, item)=> {
      // return Object.assign(acc, item)
      return acc = {...acc, ...item}
    }, [])

    this.keyz = Object.keys(newVal)

    console.log(this.keyz)
  }


  upload(){
    console.log("Имеем в таблице и отправляем в app", this.data)
    this.onResultAdd.emit(this.data)
  }


  clearTable() {
    this.data = null;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
