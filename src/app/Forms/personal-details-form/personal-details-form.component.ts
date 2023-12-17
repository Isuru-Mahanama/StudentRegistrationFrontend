import { Component, OnInit } from '@angular/core';
import { AddPersonalDetailsRequest } from '../../Category/models/add-personaldetails';
import { PersaonalDetailsService } from '../../Category/Services/persaonal-details.service';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.css'
})
export class PersonalDetailsFormComponent {

  model : AddPersonalDetailsRequest;
  constructor( private personalDetailsService : PersaonalDetailsService, private loggedInUser : LoginServiceService , private router:Router){
    this.model = {
   
    firstName: '',
    lastName: '',
    phoneNumber: NaN ,
    gender: '',
    academicProgramme: '',
    birthday: new Date(),
    enrolledDate: new Date(),
    no: '',
    street :'', 
    district:'',
    email:''
      
    }
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

}
