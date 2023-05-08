import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseUrl = 'http://localhost:3000/api/seo/pages';
  constructor(private http : HttpClient) { }

  getAllPages() : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`)
  }
  updatePageById(pageId : string, page : object) : Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${pageId}`, { page })
  }
  addPage(page : object) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, {page})
  }
  deletePage(pageId : string) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${pageId}`)
  }
}
