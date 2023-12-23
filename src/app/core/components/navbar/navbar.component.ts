import { Component } from '@angular/core';
import { LoginServiceService } from '../../../Category/Services/login-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

NaviagateToLogin() {
  
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
      this.logedInServices .loginNumber =1;
      
    }
}
NaviagateToLogOut() {
  localStorage.removeItem('LoginToken');
  this.logedInServices .loginNumber =0;
    this.router.navigate(['landingPage']);
  
}
NaviagateToScedulin() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['admin/scheduling']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}
NaviagateToCourseRegistration() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['admin/courseRegistration']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}
NaviagateToAbout() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['landingPage']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}

  constructor(public logedInServices : LoginServiceService,private router:Router){

  }
  NaviagateToDashboard(){
    if(this.logedInServices.isLoggedIn){
   this.router.navigate(['dashboard']);
   }
   if(!this.logedInServices.isLoggedIn){
     this.router.navigate(['login']);
   }
 }
}
