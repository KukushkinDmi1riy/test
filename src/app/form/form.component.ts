import { Component, OnInit, EventEmitter, Output} from '@angular/core';

// import {ArrOfObj} from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() onTextAdd = new EventEmitter<Array<any>>();

  someText2: any = ''; // входные данные из textarea

  someText: Array<any> = []; //привел в вид validJSONN

  disabled = true;



  convert() {


    const parseObj = JSON.parse(this.someText2.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '))

    const newOb = [...this.someText,...parseObj];

    console.log("Пришёл JSON", newOb);

    this.onTextAdd.emit(newOb);
    this.someText2 = '';
  }

}
