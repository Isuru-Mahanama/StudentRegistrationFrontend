import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  shouldShowNavbar: boolean | undefined ;
  shouldShowUserNavbar: boolean | undefined ;
  constructor() { }
}
