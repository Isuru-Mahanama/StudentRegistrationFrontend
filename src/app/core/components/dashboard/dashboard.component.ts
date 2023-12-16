import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../Category/Services/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router , private logedInServices : LoginServiceService){

  }

 
  NaviagateToPersonalDetails(){
    debugger
    if(this.logedInServices.isLoggedIn){
   debugger; this.router.navigate(['admin/personalDetails']);
    }
  debugger;  if(!this.logedInServices.isLoggedIn){
    debugger;  this.router.navigate(['login']);
    }
  }
    

  NaviagateToCourseRegistration(){
    debugger
    console.log("right befor registration navigation")
     if(this.logedInServices.isLoggedIn){
      debugger
    this.router.navigate(['admin/courseRegistration']);
   debugger; console.log("after registration navigation")
    }
   debugger; if(!this.logedInServices.isLoggedIn){
   debugger;   console.log("before login naviagation")
   debugger;   this.router.navigate(['login']);
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
