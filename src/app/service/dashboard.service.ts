import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    apiKey: string = 'AIzaSyCWqWIy6CC7AKpGb8znU34Be0sW0QPTO8Q';
    clientId: string = '765508964554-squ5mreu6vaqog8san397g2p2a8t831s.apps.googleusercontent.com';
    discoveryDocs: string[] = ['https://content.googleapis.com/discovery/v1/apis/searchconsole/v1/rest'];
    scopes: string = 'https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/webmasters.readonly';
    constructor() {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: this.apiKey,
          clientId: this.clientId,
          discoveryDocs: this.discoveryDocs,
          scope: this.scopes
        });
      });
    }
    authenticate() {
      return gapi.auth2.getAuthInstance().signIn();
    }
  
    loadClient() {
      return gapi.client.load('searchconsole', 'v1');
    }
  
    execute(siteUrl: string, startDate: string, endDate: string) : Observable<any> {
      return gapi.client.webmasters.searchanalytics.query({
        siteUrl: `sc-domain:${siteUrl}`,
        resource: {
          startDate: startDate,
          endDate: endDate
        }
      });
    }

  }

