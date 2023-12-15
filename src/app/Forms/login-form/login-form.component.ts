import { Component } from '@angular/core';
import { LoginDetailsRequest } from '../../Category/models/login';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from '../../app.component';



//const helper =  new JwtHelperService();
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {

  model : LoginDetailsRequest;
  constructor( private loginServiceService : LoginServiceService, private router:Router, private httpClient :HttpClient ){
    this.model = {
    email:'',
    passwordHash:''
    };
  }


  onFormSubmit(){
    
    console.log(this.model)
    this.loginServiceService.addLoginDetails(this.model)
    .subscribe({      
      next : (response : any) =>{
      
        console.log(response)
        console.log("This was successfull");
       
        localStorage.setItem('LoginToken',response);
        
       if(this.loginServiceService.isLoggedIn){
        this.router.navigate(['dashboard']);
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
  

