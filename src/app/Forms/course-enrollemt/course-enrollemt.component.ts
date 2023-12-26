import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-course-enrollemt',
  templateUrl: './course-enrollemt.component.html',
  styleUrl: './course-enrollemt.component.css'
})
export class CourseEnrollemtComponent {
  model:CourseDetailsRequest[];
  courseData: Observable<CourseDetailsRequest[]> | undefined;
  constructor(private htttpClient :HttpClient, 
              private router:Router, 
              private logginServices:LoginServiceService,
              private route:ActivatedRoute){
    this.model = [];

  }
  NavigateToDahsboard() {
    if(this.logginServices.isLoggedIn){
      this.router.navigate(['userDashboard']);
    }
    if(!this.logginServices.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

  getCourse(courseCode: string): Observable<CourseDetailsRequest[]> {
    const url = `https://localhost:7061/api/Course/admin/getCourseByCourseCode?coursCode=${courseCode}`;
  
    return this.htttpClient.get<CourseDetailsRequest[]>(url).pipe(
      map(data => {
        console.log(data); // This should log the data after the HTTP request is complete
        return data; // Return the data part
      })
    );
  }
  ngOnInit() {
    this.courseData = this.viewCourse();
    this.courseData.subscribe(course => {
    console.log("Courses", course);
    this.model = course;
  });
    this.route.params.subscribe(params => {
      const courseCode = params['courseCode'];
      if (courseCode) {
        this.getCourse(courseCode);
      }
    });
  }
  viewCourse(): Observable<CourseDetailsRequest[]> {
    return this.htttpClient.get<CourseDetailsRequest[]>('https://localhost:7061/api/Course/GetAllCourses').pipe(
     map(data => {
       
       console.log(data); // This should log the data after the HTTP request is complete
       return data; // Return the data part
     })
   );
 }
}
