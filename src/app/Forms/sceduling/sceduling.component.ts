import { Component } from '@angular/core';
import { schedulingRequest } from '../../Category/models/scheduling';
import { Observable, map } from 'rxjs';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseDetailsServicesService } from '../../Category/Services/course-details-services.service';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { ScheduleServicesService } from '../../Category/Services/schedule-services.service';

@Component({
  selector: 'app-sceduling',
  templateUrl: './sceduling.component.html',
  styleUrl: './sceduling.component.css'
})
export class ScedulingComponent {
  model:schedulingRequest;
  constructor(private httpClient :HttpClient,  private routers :Router, private courseDetailsService: CourseDetailsServicesService,private loggedInuser: LoginServiceService,private scheduleServices: ScheduleServicesService){
    this.model = {
      courseCode:'',
      startTime:'',
      endTime:'',
      day:''
      
    }
    
  }

  inputFields: any[] = [{}];
  courseData: Observable<string[]> | undefined;
  courseCodes: schedulingRequest[] = [];

  AddNewSet(){
    this.inputFields.push({ value: '' });
  }

  onFormSubmit(){
    if(this.loggedInuser.isLoggedIn){
     this.scheduleServices.addScheduleDetails(this.model)
    .subscribe({
      next : (response) =>{
    
        this.routers.navigate(['viewAllSchedule'], {
          state: { data: response }
        });
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
  if(!this.loggedInuser.isLoggedIn){
    this.routers.navigate(['login']);
  }
  }

  ngOnInit(){
    this.courseData = this.viewCourseCodes();
    console.log("COurse Codes",this.courseCodes)
  }
  viewCourseCodes(): Observable<string[]> {
     return this.httpClient.get<string[]>('https://localhost:7061/api/Course/GetAllCourseCodes').pipe(
      map(data => {
        
        console.log(data); // This should log the data after the HTTP request is complete
        return data; // Return the data part
      })
    );
  }

 
}
