import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollementServicesService {

  constructor(private http: HttpClient) { }
  
 
  addEnrollementDetails(enrollementDetails: any): Observable<any> {
    const coursCode = enrollementDetails.get('coursCode') as FormControl;
    const userID = enrollementDetails.get('userID') as FormControl;
    const coursCodeValue = coursCode.value;
    const userIDValue = userID.value;
    console.log(userIDValue);
    console.log(enrollementDetails.value.coursCode);
    const courseDetails = {coursCode:coursCodeValue,
      userID:userIDValue}
    return this.http.post<any>('https://localhost:7061/api/Enrollement/user/enrollement', courseDetails);
  }

  UnEnrollementDetails(enrollementDetails: any): Observable<any> {
    const coursCode = enrollementDetails.get('coursCode') as FormControl;
    
    const userID = enrollementDetails.get('userID') as FormControl;
    const coursCodeValue = coursCode.value;
    const userIDValue = userID.value;
    const courseDetails = {coursCode:coursCodeValue,
      userID:userIDValue}
    return this.http.put<any>('https://localhost:7061/api/Enrollement/user/unEnrollement', courseDetails);
  }

} 
