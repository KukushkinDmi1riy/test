import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {jsonParseValidator} from '../../validators/my.validators';
import {qoutereplace} from '../../utils/quotereplace.utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  ngOnInit() {
    this.form  = new FormGroup({
      jsonForm: new FormControl('', [
        Validators.required,
        jsonParseValidator()
      ])
    })

  }

  @Output() onTextAdd = new EventEmitter<Array<any>>();

  someText2: any = ''; // входные данные из textarea

  someText: Array<any> = []; //привел в вид validJSONN

  disabled = true;




  convert() {

    const parseObj = JSON.parse(qoutereplace(this.someText2))
    const newOb = [...this.someText,...parseObj];
    console.log("Пришёл JSON", newOb);
    this.onTextAdd.emit(newOb);
    this.someText2 = '';
    this.form.reset()

  }

}
