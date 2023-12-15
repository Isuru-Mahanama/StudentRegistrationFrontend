import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetailsRequest } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper =  new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  addLoginDetails(model:LoginDetailsRequest):Observable<any>{
    
    return this.http.post('https://localhost:7061/api/User/login', model,{responseType: 'text'})
   
  }

  get isLoggedIn():boolean{
    const token = localStorage.getItem('LoginToken');
    return !helper.isTokenExpired(token);
  }
}
