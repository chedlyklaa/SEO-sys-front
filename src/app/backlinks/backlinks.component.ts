import { Component, OnInit } from '@angular/core';
import { BacklinksService } from '../service/backlinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backlinks',
  templateUrl: './backlinks.component.html',
  styleUrls: ['./backlinks.component.css']
})
export class BacklinksComponent implements OnInit { 

    Links: string[] = [];

  
    constructor(private backlinksService :BacklinksService, private router : Router ) {}
  
    ngOnInit(): void {
      this.loadLinks()
    }
    
    loadLinks(){
      console.log('loadlinkswork')
      this.backlinksService.getBacklinks().subscribe(response => {
        response.backlinks.forEach((item : string) => {
          
          this.Links.push(item)  
        });
        
        console.log(this.Links)
      }
  
      )
}
}
