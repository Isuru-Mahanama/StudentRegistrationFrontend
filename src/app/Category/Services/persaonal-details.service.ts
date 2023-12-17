import { Injectable } from '@angular/core';
import { AddPersonalDetailsRequest } from '../models/add-personaldetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StudentDetailsRequest } from '../models/studentDetails';
@Injectable({
  providedIn: 'root'
})
export class PersaonalDetailsService {

  constructor(private http: HttpClient) { }

  addPersonalDetails(model:AddPersonalDetailsRequest):Observable<any>{
    return this.http.post<any>('https://localhost:7061/api/Students', model)
  }
  
  viewStudentEmail(): Observable<StudentDetailsRequest> {
    return this.http.get<StudentDetailsRequest>('https://localhost:7061/api/Students/GetStudentDetails');
  }

 
}
