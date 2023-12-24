import { Injectable } from '@angular/core';
import { schedulingRequest } from '../models/scheduling';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { schedulingIDRequest } from '../models/schedulingID';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServicesService {

  constructor(private http: HttpClient) { }

  addScheduleDetails(model:schedulingIDRequest):Observable<any>{
    console.log("scheduling details",model)
    return this.http.post<any>(' https://localhost:7061/api/Schedule/admin/schedule', model)
  } 
}
