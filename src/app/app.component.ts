import { Component } from '@angular/core';
import { NavbarServiceService } from './Category/Services/navbar-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentRegistration';
  ShowNavbar: boolean | undefined ;
  ShowUserNavbar: boolean | undefined ;
  constructor(private navbarServices: NavbarServiceService){
  }
  
  ngOnInit(){
    this.ShowNavbar = this.navbarServices.shouldShowNavbar !== undefined ? this.navbarServices.shouldShowNavbar : false;
    this.ShowUserNavbar = this.navbarServices.shouldShowUserNavbar !== undefined ? this.navbarServices.shouldShowUserNavbar : false;
  }
  
}
