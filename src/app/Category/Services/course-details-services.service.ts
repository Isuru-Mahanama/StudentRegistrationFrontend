import { Injectable } from '@angular/core';
import { schedulingRequest } from '../models/scheduling';
import { CourseDetailsRequest } from '../models/corseDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsServicesService {
  addCourseDetails(model:CourseDetailsRequest):Observable<any>{
    return this.http.post<any>(' https://localhost:7061/api/Course/admin/course', model)
  } 
  addCourses(model: schedulingRequest) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }
}
