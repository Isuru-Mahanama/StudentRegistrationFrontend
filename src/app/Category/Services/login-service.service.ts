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

  getLoggedInUser(): string {
    try {
        const loginToken = localStorage.getItem('LoginToken');

        // Check if loginToken is null or undefined
        if (loginToken === null || loginToken === undefined) {
            return ''; // or handle accordingly
        }

        // Parse the JSON string
        const parsedToken = JSON.parse(loginToken);
        console.log(parsedToken.token);
        // Check if the token property exists
        if (parsedToken && typeof parsedToken.token === 'string') {
            return parsedToken.token;
        } else {
            return ''; // or handle accordingly
        }
    } catch (error) {
        console.error('Error parsing JSON from LoginToken:', error);
        return ''; // or handle accordingly
    }
}

}
