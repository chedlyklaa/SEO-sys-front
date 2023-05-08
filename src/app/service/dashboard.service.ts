import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http : HttpClient){}
  apiUrl = "http://localhost:3000/api/data"
  getData() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`)
  }
}

