import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersaonalDetailsService } from '../../Category/Services/persaonal-details.service';
import { StudentDetailsRequest } from '../../Category/models/studentDetails';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { NavbarServiceService } from '../../Category/Services/navbar-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent  {

  
  profileData$: Observable<StudentDetailsRequest> | undefined;
  constructor(private httpClient :HttpClient, 
              private personalDetails : PersaonalDetailsService, 
              private loginService : LoginServiceService, 
              private routers :Router,
              private navbarServices: NavbarServiceService){

  }
  ngOnInit() {
    this.profileData$ = this.viewStudentEmail();
  }
  viewStudentEmail(): Observable<StudentDetailsRequest> {
    // You can include headers directly in the request like this
    console.log(this.loginService.getLoggedInUser())
    const headers = new HttpHeaders({
      'Authorization': 'bearer '+this.loginService.getLoggedInUser()// Replace with your actual token
    });

    console.log(this.loginService.getLoggedInUser);
    this.profileData$  = this.httpClient.get<StudentDetailsRequest>('https://localhost:7061/api/Students/GetStudentDetails', { headers });
    console.log(this.profileData$);
    return this.profileData$;
  }

  NavigatToDashboard() {
    if(this.loginService.isLoggedIn){
      this.routers.navigate(['userDashboard']);
    }
    if(!this.loginService.isLoggedIn){
      this.routers.navigate(['login']);
    }
 }
}
