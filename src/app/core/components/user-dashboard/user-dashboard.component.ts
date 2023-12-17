import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../Category/Services/login-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(private router:Router , private logedInServices : LoginServiceService){

  }

 
  NaviagateToPersonalDetails(){
    
    if(this.logedInServices.isLoggedIn){
     this.router.navigate(['myProfile']);
    }
       if(!this.logedInServices.isLoggedIn){
       this.router.navigate(['login']);
    }
  }
    

  NaviagateToCourseRegistration(){
    
    console.log("right befor registration navigation")
     if(this.logedInServices.isLoggedIn){
  
    this.router.navigate(['admin/courseRegistration']);
       console.log("after registration navigation")
    }
     if(!this.logedInServices.isLoggedIn){
       console.log("before login naviagation")
       this.router.navigate(['login']);
    }
  }

  

    
  NaviagateToScheduling(){
    if(this.logedInServices.isLoggedIn){
   this.router.navigate(['admin/scheduling']);
   }
   if(!this.logedInServices.isLoggedIn){
     this.router.navigate(['login']);
   }
 }
}
