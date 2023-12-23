import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { CourseDetailsServicesService } from '../../Category/Services/course-details-services.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css'
})
export class CourseRegistrationComponent {

 
  
  model: CourseDetailsRequest;
  someIntVariable: number = 0;
  constructor(private loggedInuser: LoginServiceService , private courseRegistration : CourseDetailsServicesService, private router: ActivatedRoute,private roter:Router,private activateRouter :ActivatedRoute,private httpClient : HttpClient){
    this.model={
      courseName:'',
      courseCode:'',
      semester:NaN,
      level:NaN,
      category:'',
      startDate: '',
      endDate : ''
    }
  }

  ngOnInit(){
    
     // Retrieve the courseCode parameter from the URL
     this.activateRouter.params.subscribe((params: { [x: string]: any; }) => {
      const courseCode = params['courseCode'];
      if (courseCode) {
        this.model.courseCode = courseCode;
        this.getCourseDetails(courseCode);
        if (courseCode) {
          this.model.courseCode = courseCode;
          this.getCourseDetails(courseCode);
        }
      }
    });
    
  } 
  
  getCourseDetails(courseCode: string) {
    const apiUrl = `https://localhost:7061/api/Course/admin/getCourseByCourseCode?coursCode=${courseCode}`;
  
    this.httpClient.get(apiUrl).subscribe(
      (response) => {
        // Handle the API response here
        this.someIntVariable = 1;
        console.log('API Response:', response);
        
        this.model = { ...this.model, ...response };
        const startDateString = this.model.startDate.split('T')[0];
        const endDateString = this.model.endDate.split('T')[0];
        this.model.startDate = startDateString
        this.model.endDate = endDateString
        // Optionally, log the updated model for debugging
        console.log('Updated Model:', this.model);
      },
      (error) => {
        // Handle errors here
        console.error('API Error:', error);
      }
    );
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
  //
  
  
  // post request to update the details
  onFormUpdate(){
    if(this.loggedInuser.isLoggedIn){
      console.log(this.model)
     this.courseRegistration.updateCourseDetails(this.model)
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
  backToDashboard(){
    if(this.loggedInuser){
      this.roter.navigate(['dashboard']);
    }
  }
}
