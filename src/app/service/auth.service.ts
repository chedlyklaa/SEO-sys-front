import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getLoggedInUser() {
    return localStorage.getItem('user')
  }

  constructor(private http:HttpClient) { 

  }
  apiUrl='http://localhost:3000/api/auth';
  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, { email: email, password: password })
  }

  resetPassword(email: string) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/reset-password`, { email: email})
  }

  changePassword(resetToken : string, newPassword : string) : Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/reset-password/${resetToken}`, {newPassword})
  }


  isLoggedIn(): Observable<boolean> {
    const user = localStorage.getItem('user');
    return of(user !== null);
  }

  logout(){
     localStorage.removeItem("user") 
  }
  getRole(){
    return JSON.parse(localStorage.getItem('user')!).roles;
  }
  
  // // User management ==> new service called userSevice not here!!!
  // RegisterUser(inputdata:any){
  //   return this.http.post(this.apiUrl,inputdata)
  // }
  // GetUserbyCode(id:any){
  //   return this.http.get(this.apiUrl+'/'+id);
  // }
  // GetUserbyEmail(email:any){
  //   return this.http.get(this.apiUrl+'?email='+email);
  // }
  // Getall(){
  //   return this.http.get(this.apiUrl);
  // }
  // updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiUrl+'/'+id,inputdata);
  // }
  // getuserrole(){
  //   return this.http.get('http://localhost:3000/role');
  // }
  // isloggedin(){
  //   return sessionStorage.getItem('username')!=null;
  // }
  // getrole(){
  //   return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  // }
  // Getaccessbyrole(role:any,menu:any){
  //   return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  // }
}
