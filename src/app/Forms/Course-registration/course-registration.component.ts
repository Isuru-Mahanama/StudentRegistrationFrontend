import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { CourseDetailsServicesService } from '../../Category/Services/course-details-services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css'
})
export class CourseRegistrationComponent {

 
  model: CourseDetailsRequest;
  constructor(private loggedInuser: LoginServiceService , private courseRegistration : CourseDetailsServicesService, private roter :Router){
    this.model={
      courseID: NaN,
      courseName:'',
      courseCode:'',
      semester:NaN,
      level:NaN,
      category:'',
      startDate: new Date(),
      endDate : new Date()
    }
  }
  onFormSubmit(){
    if(this.loggedInuser.isLoggedIn){
     this.courseRegistration.addCourseDetails(this.model)
    .subscribe({
      next : (response) =>{
    
        this.roter.navigate(['viewAllCourses'], {
          state: { data: response }
        });
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
  if(!this.loggedInuser.isLoggedIn){
    this.roter.navigate(['login']);
  }
  }
}
