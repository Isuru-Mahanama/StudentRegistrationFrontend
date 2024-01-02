import { Component } from '@angular/core';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrl: './langing-page.component.css'
})
export class LangingPageComponent {
  constructor(private logedInServices :LoginServiceService,
              private router:Router){}
  NaviagateToDashboard(){
    if(this.logedInServices.isLoggedIn){
   this.router.navigate(['dashboard']);
   }
   if(!this.logedInServices.isLoggedIn){
     this.router.navigate(['login']);
   }
 }
}
