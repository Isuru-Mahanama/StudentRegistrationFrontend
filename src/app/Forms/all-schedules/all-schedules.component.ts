import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { schedulingRequest } from '../../Category/models/scheduling';
import { Observable, map } from 'rxjs';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrl: './all-schedules.component.css'
})
export class AllSchedulesComponent {
NavigateToUpdate(scheduleID:number) {
  console.log(scheduleID)
  this.router.navigate(['admin/scheduling', { scheduleID: scheduleID }]);
}

  model : schedulingRequest[]
  constructor(private http : HttpClient,private logginServices: LoginServiceService,private router :Router ){
      this.model = [];
  }
  scheduleData: Observable<schedulingRequest[]> | undefined;
  ngOnInit(){
    this.scheduleData = this.viewCourse();
    this.scheduleData.subscribe(schedule => {
    console.log("Schedule", schedule);
    this.model = schedule;
  });
  }
  viewCourse(): Observable<schedulingRequest[]> {
     return this.http.get<schedulingRequest[]>('https://localhost:7061/api/Schedule/GetAllSchedules').pipe(
      map(data => {
        
        console.log(data); // This should log the data after the HTTP request is complete
        return data; // Return the data part
      })
    );
  }

  NavigateToDahsboard() {
    if(this.logginServices.isLoggedIn){
      this.router.navigate(['dashboard']);
    }
    if(!this.logginServices.isLoggedIn){
      this.router.navigate(['login']);
    }
  }
}
