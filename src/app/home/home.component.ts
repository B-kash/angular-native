import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patients: any = [];
  constructor() { }

  ngOnInit() {
    this.patients=[];
    for(let i = 1 ;i<=20;i++){
      let patient = {
        name:"test"+i,
        id:i
      };
      this.patients.push(patient);
    }
  }

  onPatientClick(){
    console.log("Patient clicked");
  }

}
