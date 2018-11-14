import { Component, OnInit } from '@angular/core';
import {currentId} from "async_hooks";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  currentMonth;
  currentYear;
  currentDay;

  constructor() { }

  ngOnInit() {
    let dates = new Date().toISOString().slice(10,0).split("-");
    this.currentDay = dates[2];
    this.currentMonth = dates[1];
    this.currentYear = dates[0];

  }

}
