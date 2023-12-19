import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  model:CourseDetailsRequest[];
  constructor(private htttpClient :HttpClient){
    this.model = [];

  }
  
  courseData: Observable<CourseDetailsRequest[]> | undefined;

  ngOnInit(){
    this.courseData = this.viewCourse();
  this.courseData.subscribe(courses => {
    console.log("Courses", courses);
    this.model = courses;
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
