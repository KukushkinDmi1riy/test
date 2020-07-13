import { Component, OnInit, Input } from '@angular/core';
// import { ArrOfObj } from '../models';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() finalD: String;


  constructor() { }

  ngOnInit(): void {
  }



}
