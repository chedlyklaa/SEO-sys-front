import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BacklinksService {
  private baseUrl = 'http://localhost:3000/api/data/backlinks';
  constructor(private http : HttpClient) { }
  getBacklinks(){
    return this.http.get<any>(`${this.baseUrl}`)
  }
}
