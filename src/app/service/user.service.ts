import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:3000/api/users';
  constructor(private http : HttpClient) { }
  getAllUsers(){
    return this.http.get<any>(`${this.apiUrl}`)
  }
  createUser(username : string, email : string, password: string, role : string){
    return this.http.post<any>(`${this.apiUrl}`, {username, email, password, roles: role})
  }
  updateUserById(userId: string, user : object){
    return this.http.put<any>(`${this.apiUrl}/${userId}`, user)
  }
  deleteUserById(userId : string){
    return this.http.delete<any>(`${this.apiUrl}/${userId}`)
  }
}
