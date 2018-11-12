import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patients: any = [];
  constructor(private router:Router) { }

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

  onPatientClick(patient){
    console.log("Patient clicked",patient);
    this.router.navigate(['/view-patient/',patient.id]);
  }

  addPatient(){
    console.log("Wanted to add a new Patient");
    this.router.navigate(['/add-patient']);
  }
}
