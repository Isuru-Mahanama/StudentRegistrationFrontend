import { Component } from '@angular/core';
import { schedulingRequest } from '../../Category/models/scheduling';
import { Observable, map } from 'rxjs';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailsServicesService } from '../../Category/Services/course-details-services.service';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { ScheduleServicesService } from '../../Category/Services/schedule-services.service';
import { schedulingIDRequest } from '../../Category/models/schedulingID';
import { PickerInteractionMode } from 'igniteui-angular';
@Component({
  selector: 'app-sceduling',
  templateUrl: './sceduling.component.html',
  styleUrl: './sceduling.component.css'
})
export class ScedulingComponent {
  public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
    public format = 'hh:mm tt';
    public date: Date = new Date();
  model:schedulingIDRequest;
  constructor(private httpClient :HttpClient,  
              private routers :Router, 
              private courseDetailsService: CourseDetailsServicesService,
              private loggedInuser: LoginServiceService,
              public scheduleServices: ScheduleServicesService,
              private acitvateRouter :ActivatedRoute){
    this.model = {
      scheduleID:0,
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
    console.log(response) 
        this.routers.navigate(['viewAllSchedule'], {
          state: { data: response }
          
        })
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
    console.log("COurse Codes",this.courseCodes);

     // Retrieve the courseCode parameter from the URL
     this.acitvateRouter.params.subscribe((params: { [x: string]: any; }) => {
      
      const scheduleID = params['scheduleID'];
      if (scheduleID) {
        // Do something with the courseCode, e.g., assign it to your model
        this.model.scheduleID = scheduleID;
        console.log("ScheduleID"+scheduleID)
        this.getSchedule(scheduleID);
        console.log("HI")
      }
    });
  }  
  //
  getSchedule(scheduleID: string) {
    const apiUrl = `https://localhost:7061/api/Schedule/admin/getScheduleByID?scheduleID=${scheduleID}`;
  
    this.httpClient.get(apiUrl).subscribe(
      (response) => {
        // Handle the API response here
        
        console.log('API Response:', response);
        
        this.model = { ...this.model, ...response };

        // Optionally, log the updated model for debugging
        console.log('Updated Model:', this.model);
        console.log(this.model.courseCode)
      },
      (error) => {
        // Handle errors here
        console.error('API Error:', error);
      }
    );
  }
  // 
   getSchedules(scheduleID:string): Observable<schedulingRequest[]> {
    return this.httpClient.get<schedulingRequest[]>('https://localhost:7061/api/Schedule/admin/getScheduleByID?scheduleID=${scheduleID}').pipe(
     map(data => {
       console.log("THose are the courseDetails")
       console.log(data); // This should log the data after the HTTP request is complete
       return data; // Return the data part
     })
   );
 }
  // 
  viewCourseCodes(): Observable<string[]> {
     return this.httpClient.get<string[]>('https://localhost:7061/api/Course/GetAllCourseCodes').pipe(
      map(data => {
        console.log(data); // This should log the data after the HTTP request is complete
        return data; // Return the data part
      })
    );
  }

 //
 onFormUpdate(){
  if(this.loggedInuser.isLoggedIn){
    console.log(this.model)
   this.scheduleServices.updateScheduleDetails(this.model)
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
this.scheduleServices.someIntVariable = 0
}
backToDashboard(){
  if(this.loggedInuser){
    this.routers.navigate(['dashboard']);
  }
}
}
