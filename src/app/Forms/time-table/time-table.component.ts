import { Component, TemplateRef } from '@angular/core';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentDetailsRequest } from '../../Category/models/studentDetails';
import { schedulingIDRequest } from '../../Category/models/schedulingID';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css'
})
export class TimeTableComponent {

  profileData$: Observable<StudentDetailsRequest> | undefined;
  model: schedulingIDRequest[];
  schedulingData: Observable<schedulingIDRequest[]> | undefined;
  emptyCell: any;

  constructor(private logginServices:LoginServiceService,
              private router: Router,
              private activateRouter:ActivatedRoute,
              private httpClient:HttpClient){
              this.model=[]
              }
  NavigateToDahsboard() {
    if(this.logginServices.isLoggedIn){
      this.router.navigate(['userDashboard']);
    }
    if(!this.logginServices.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

  
  ngOnInit(){
    this.schedulingData = this.viewStudentEmail();
    this.schedulingData.subscribe(schedules => {
    console.log("Students", schedules);
    this.model = schedules;
  });
  }
  viewStudentEmail(): Observable<schedulingIDRequest[]> {
    console.log(this.logginServices.getLoggedInUser())
    const headers = new HttpHeaders({
      'Authorization': 'bearer '+this.logginServices.getLoggedInUser()// Replace with your actual token
    });

    console.log(this.logginServices.getLoggedInUser);
    return this.httpClient.get<schedulingIDRequest[]>('https://localhost:7061/api/Enrollement/GetTimeTableDetails', { headers });
    
  }
}
