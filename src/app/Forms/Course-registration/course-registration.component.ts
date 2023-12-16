import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { LoginServiceService } from '../../Category/Services/login-service.service';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css'
})
export class CourseRegistrationComponent {

 
  model: CourseDetailsRequest;
  constructor(private loggedInuser: LoginServiceService){
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
    console.log("thisis")
  }
}
