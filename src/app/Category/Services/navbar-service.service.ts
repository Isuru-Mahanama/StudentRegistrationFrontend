import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  adminNavbar: boolean = true ;
  constructor() { }
}
