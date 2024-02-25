import { Component } from '@angular/core';
import { CourseDetailsRequest } from '../../Category/models/corseDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Observable, map } from 'rxjs';
import { StudentDetailsRequest } from '../../Category/models/studentDetails';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrollementServicesService } from '../../Category/Services/enrollement-services.service';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { NavbarServiceService } from '../../Category/Services/navbar-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-enrollemt',
  templateUrl: './course-enrollemt.component.html',
  styleUrl: './course-enrollemt.component.css'
})
export class CourseEnrollemtComponent {
  rowErrorMessages: { [key: string]: string } = {};
  model:CourseDetailsRequest[];
  profileData$: Observable<StudentDetailsRequest> | undefined;
  courseData: Observable<CourseDetailsRequest[]> | undefined;
  constructor(private htttpClient :HttpClient, 
              private router:Router, 
              private logginServices:LoginServiceService,
              private route:ActivatedRoute,
              private enrollementServices:EnrollementServicesService,
              private snackBar: MatSnackBar){
    this.model = [];

  }
  enrollementDetails = new FormGroup({
    coursCode : new FormControl(''),
    userID : new FormControl()
  })
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
 EnrollForCourses(courseCode: string) {
 
  const headers = new HttpHeaders({
    'Authorization': 'bearer '+this.logginServices.getLoggedInUser()// Replace with your actual token
  });

  
  this.profileData$  = this.htttpClient.get<StudentDetailsRequest>('https://localhost:7061/api/Students/GetStudentDetails', { headers });
    console.log(this.profileData$);
    this.profileData$.subscribe(
      (data: StudentDetailsRequest) => {
        console.log('StudentID:', data.studentID);
        // Do something with the data if needed
        this.SaveEnrollData(courseCode,data.studentID)
      },
      (error) => {
        console.error('Error fetching profile data:', error);
        // Handle errors if needed
      }
    );
    return this.profileData$;
}

SaveEnrollData(coursCode:string,userID:number){
  this.rowErrorMessages[coursCode] = "";
  this.enrollementDetails.setValue({
    coursCode: coursCode,
    userID:userID
  });
  console.log(this.enrollementDetails);
  this.enrollementServices.addEnrollementDetails(this.enrollementDetails).subscribe(
    (data: any) => {
      // Handle success if needed
      this.openSnackBar('Scuccesfully registered to the course','success-snackbar');
    },
    (error: any) => {
      if (error.status === 409) {
       
        this.openSnackBar('You have already enrolled to the course','error-snackbar');
       
      } else {
        console.error('An error occurred:', error);
      }
    }
  );
}

UnEnrollForCourses(courseCode: string) {
  const headers = new HttpHeaders({
    'Authorization': 'bearer '+this.logginServices.getLoggedInUser()// Replace with your actual token
  });
  
  this.profileData$  = this.htttpClient.get<StudentDetailsRequest>('https://localhost:7061/api/Students/GetStudentDetails', { headers });
    console.log(this.profileData$);
    this.profileData$.subscribe(
      (data: StudentDetailsRequest) => {
        console.log('StudentID:', data.studentID);
        this.UnEnrollData(courseCode,data.studentID)
        this.openSnackBar('Scuccesfully unenrolled from the course','success-snackbar');
      },
      (error) => {
        if (error.status === 409) {
          this.openSnackBar('You are not enrolled to the course','error-snackbar');
        } else {
          console.error('An error occurred:', error);
        }
      }
    );
    return this.profileData$;
}

UnEnrollData(coursCode:string,userID:number){
  this.enrollementDetails.setValue({
    coursCode: coursCode,
    userID:userID
  });
  console.log(this.enrollementDetails);
  this.enrollementServices.UnEnrollementDetails(this.enrollementDetails).subscribe(
    (data: any) => {   
    }
  );
}
openSnackBar(message: string, panelClass:string):void {
  this.snackBar.open(message, 'Close', {
    duration: 4000, // Adjust duration as needed
    horizontalPosition:'center',
    verticalPosition: 'top',
    panelClass:[panelClass] // Position the snackbar at the top
  });
}
}
