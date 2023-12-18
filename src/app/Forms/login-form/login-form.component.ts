import { Component } from '@angular/core';
import { LoginDetailsRequest } from '../../Category/models/login';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppComponent } from '../../app.component';
import { jwtDecode } from 'jwt-decode';



const jwtHelper =  new JwtHelperService();


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
        console.log(JSON.parse(response).userType);
        console.log("This was successfull");
        console.log(jwtDecode(response));
        const decodedToken = jwtDecode(response)
        //const role = decodedToken as unknown as string;
        //console.log(role)
        // Decode the token to get the user type
     //   const decodedHeader = jwtDecode(response, { header: true });
       // const role = decodedToken  as JwtPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      
        //
       // console.log(decodedHeader);
      
        localStorage.setItem('LoginToken',response);
        
     
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
  

