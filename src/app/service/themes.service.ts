import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeywordTheme } from '../KeywordTheme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private baseUrl = 'http://localhost:3000/api/seo/themes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<KeywordTheme[]> {
    return this.http.get<KeywordTheme[]>(this.baseUrl);
  }

  getOne(themeId: string): Observable<KeywordTheme> {
    return this.http.get<KeywordTheme>(`${this.baseUrl}/${themeId}`);
  }
  addTheme(newTheme : string) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, {theme : newTheme, keywords : []})
  }
  deleteTheme(themeId : string) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${themeId}`)
  }
  addKeyword(themeId: string, keyword: string): Observable<KeywordTheme> {
    return this.http.post<KeywordTheme>(`${this.baseUrl}/${themeId}/keywords`, { keyword });
  }

  deleteKeyword(themeId: string, keyword: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${themeId}/keywords/${keyword}`);
  }
}
