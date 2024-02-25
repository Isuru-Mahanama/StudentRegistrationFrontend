import { Component } from '@angular/core';
import { NavbarServiceService } from './Category/Services/navbar-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentRegistration';
  

  constructor(private navbarServices : NavbarServiceService){

  }
  ShowNavbar():any {
    debugger
    return  localStorage.getItem('navbar');

  }
}
