import { Component, OnInit } from '@angular/core';
import { AddPersonalDetailsRequest } from '../../Category/models/add-personaldetails';
import { PersaonalDetailsService } from '../../Category/Services/persaonal-details.service';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.css'
})
export class PersonalDetailsFormComponent {

  model : AddPersonalDetailsRequest;
  constructor( public personalDetailsService : PersaonalDetailsService, 
               private loggedInUser : LoginServiceService , 
               private router:Router,
               private activateRouter : ActivatedRoute,
               private httpClient : HttpClient){
    this.model = {
   
    firstName: '',
    lastName: '',
    phoneNumber: NaN ,
    gender: '',
    academicProgramme: '',
    birthday: '',
    enrolledDate: '',
    no: '',
    street :'', 
    district:'',
    email:'',
    studentID:NaN
      
    }
  }

  ngOnInit(){
    
     // Retrieve the courseCode parameter from the URL
     this.activateRouter.params.subscribe((params: { [x: string]: any; }) => {
      
      const studentID = params['studentID'];
      if (studentID) {
        // Do something with the courseCode, e.g., assign it to your model
        this.model.studentID = studentID;
        console.log("studentID"+studentID)
        this.getStudentByID(studentID);
        console.log("HI")
      }
    });
  }  

  getStudentByID(studentID: string) {

    const apiUrl = `https://localhost:7061/api/Students/admin/getStudentByID?studentID=${studentID}`;
  
    this.httpClient.get(apiUrl).subscribe(
      (response) => {
        // Handle the API response here
        
        console.log('API Response:', response);
        
        this.model = { ...this.model, ...response };
        const birthday = this.model.birthday.split('T')[0];
        const enrolledDate = this.model.enrolledDate.split('T')[0];
        this.model.birthday = birthday
        this.model.enrolledDate = enrolledDate
        // Optionally, log the updated model for debugging
        console.log('Updated Model:', this.model);
        console.log(this.model.firstName)
      },
      (error) => {
        // Handle errors here
        console.error('API Error:', error);
      }
    );
  }
  onFormSubmit(){
    console.log("Student passing details"+this.model)
    if(this.loggedInUser.isLoggedIn){
     this.personalDetailsService.addPersonalDetails(this.model)
    .subscribe({
      next : (response) =>{
        const formattedResponse = JSON.stringify(response, null, 2);
        
        console.log("Student passing details"+ formattedResponse)
      
        // Create a navigation extras object to pass data
    
        this.router.navigate(['admin/gettingstudentdetails'], {
          state: { data: response }
        });
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
  if(!this.loggedInUser.isLoggedIn){
    this.router.navigate(['login']);
  }
  }

  //updating the form
  onFormUpdate(){
    if(this.loggedInUser.isLoggedIn){
      console.log("updated student details",this.model)
     this.personalDetailsService.updatePersonalDetails(this.model)
     
    .subscribe({
      next : (response) =>{
    
        this.router.navigate(['viewAllStudents'], {
          state: { data: response }
        });
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
  if(!this.loggedInUser.isLoggedIn){
    this.router.navigate(['login']);
  }
  this.personalDetailsService.saveUpdatebuttonChange = 0
  }
  backToDashboard(){
    if(this.loggedInUser){
      this.router.navigate(['dashboard']);
    }
  }
}
