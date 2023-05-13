import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/api/robots'
  /*getLinks(){
    return ["test.test","finaly.finaly"]
  }*/
  addLink(link : string) {
    return this.http.post<any>(`${this.apiurl}/`, { link : link });
  }
  //after fixing the API change the name to getLinks()
  getlinks(){
    return this.http.get<any>(`${this.apiurl}`);

  }
  deleteLinkById(id:String){
    return this.http.delete<any>(`${this.apiurl}/${id}`);
  }
  deleteLink(link:String){
    return this.http.delete<any>(`${this.apiurl}/${link}`);
  }
}
