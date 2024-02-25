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
     this.router.navigate(['login']);
 }
}
