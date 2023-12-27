import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginServiceService } from '../../Category/Services/login-service.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {

  model:CourseDetailsRequest[];
  constructor(private htttpClient :HttpClient, 
              private router:Router, 
              private logginServices:LoginServiceService,
              private route:ActivatedRoute){
    this.model = [];

  }
  
  courseData: Observable<CourseDetailsRequest[]> | undefined;
  NavigateToUpdate(courseCode: string) {
    this.router.navigate(['admin/courseRegistration', { courseCode: courseCode }]);
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
  getCourse(courseCode: string): Observable<CourseDetailsRequest[]> {
    const url = `https://localhost:7061/api/Course/admin/getCourseByCourseCode?coursCode=${courseCode}`;
  
    return this.htttpClient.get<CourseDetailsRequest[]>(url).pipe(
      map(data => {
        console.log(data); // This should log the data after the HTTP request is complete
        return data; // Return the data part
      })
    );
  }
  viewCourse(): Observable<CourseDetailsRequest[]> {
     return this.htttpClient.get<CourseDetailsRequest[]>('https://localhost:7061/api/Course/GetAllCourses').pipe(
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

  NavigateToDelete(courseCode: string) {
    console.log(courseCode)
    const apiUrl = `https://localhost:7061/api/Course/admin/getCourseDelete?courseCode=${courseCode}`;
  
    this.htttpClient.delete(apiUrl).subscribe(
      (response) => {      
        console.log('API Response:', response);
        window.location.reload();
      },
      (error) => {
        // Handle errors here
        console.error('API Error:', error);
      }
    );
  }
}
