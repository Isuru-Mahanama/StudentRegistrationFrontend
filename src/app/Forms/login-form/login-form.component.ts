import { Component } from '@angular/core';
import { LoginDetailsRequest } from '../../Category/models/login';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppComponent } from '../../app.component';
import { jwtDecode } from 'jwt-decode';
import { EmailValidator } from '@angular/forms';



const jwtHelper =  new JwtHelperService();


//const helper =  new JwtHelperService();
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  
  model : LoginDetailsRequest;
  constructor( 
        private loginServiceService : LoginServiceService, 
        private router:Router, 
        private httpClient :HttpClient
      ) {
    this.model = {
    email:'',
    passwordHash:''
    
    };
  }

   validateEmail(email : string) {
    // Regular expression for a valid email address ending with "example.com"
    const emailRegex = /^[a-zA-Z0-9._-]+@example\.com$/;
  
    return emailRegex.test(email);
  }
  onFormSubmit(){
      this.loginServiceService.addLoginDetails(this.model)
      .subscribe({      
      next : (response : any) =>{
        console.log(JSON.parse(response).userType);
        console.log("This was successfull");
        localStorage.setItem('LoginToken',response);
        this.loginServiceService.loginNumber =1;
     
       if(this.loginServiceService.isLoggedIn){
        if(JSON.parse(response).userType !== undefined && JSON.parse(response).userType === 1){
          this.router.navigate(['dashboard']);
        }
        else{
         this.router.navigate(['userDashboard']);
          }
       }

       if(!this.loginServiceService.isLoggedIn){
        console.log("Login again. token expired")
       }
       
      },
      error: (error) =>{
        
        console.log(error);
      }
    })
    
    
    
  }
 
     
  }
  

