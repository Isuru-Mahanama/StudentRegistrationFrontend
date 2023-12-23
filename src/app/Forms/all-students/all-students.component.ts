import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentDetailsRequest } from '../../Category/models/studentDetails';
import { Observable, map } from 'rxjs';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent {

  model:StudentDetailsRequest[]
  constructor(private http:HttpClient, private logginServices:LoginServiceService,private router: Router){
    this.model=[]
  }
  studentData: Observable<StudentDetailsRequest[]> | undefined;
  ngOnInit(){
    this.studentData = this.viewStudents();
    this.studentData.subscribe(students => {
    console.log("Students", students);
    this.model = students;
  });
  }
  viewStudents(): Observable<StudentDetailsRequest[]> {
     return this.http.get<StudentDetailsRequest[]>('https://localhost:7061/api/Students/GetAllStudents').pipe(
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
}
