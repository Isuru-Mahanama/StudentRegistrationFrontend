import { Injectable } from '@angular/core';
import { AddPersonalDetailsRequest } from '../models/add-personaldetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StudentDetailsRequest } from '../models/studentDetails';
import { StudentAddressDetails } from '../models/studentaddress';
@Injectable({
  providedIn: 'root'
})
export class PersaonalDetailsService {

  someIntVariable: number = 0;
  saveUpdatebuttonChange : number=0;
  constructor(private http: HttpClient) { }

  addPersonalDetails(model:AddPersonalDetailsRequest):Observable<any>{
    console.log("student details ",model);
    return this.http.post<any>('https://localhost:7061/api/Students', model)
  }
  
  viewStudentEmail(): Observable<StudentDetailsRequest> {
    return this.http.get<StudentDetailsRequest>('https://localhost:7061/api/Students/GetStudentDetails');
  }

  updatePersonalDetails(model:StudentAddressDetails):Observable<any>{
    console.log("updated personal details",model)
    return this.http.put<any>('https://localhost:7061/api/Students/admin/updateStudentDetails', model)
  }
 
}
