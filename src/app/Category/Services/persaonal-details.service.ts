import { Injectable } from '@angular/core';
import { AddPersonalDetailsRequest } from '../models/add-personaldetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersaonalDetailsService {

  constructor(private http: HttpClient) { }

  addPersonalDetails(model:AddPersonalDetailsRequest):Observable<void>{
    return this.http.post<void>('https://localhost:7061/api/Students', model)
  }
}
