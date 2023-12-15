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
    if(this.logedInServices.isLoggedIn){
    this.router.navigate(['admin/personalDetails']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
  }
    
}
