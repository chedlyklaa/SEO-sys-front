import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RobotsService } from '../service/robots.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-manage-robots',
  templateUrl: './manage-robots.component.html',
  styleUrls: ['./manage-robots.component.css']
})
export class ManageRobotsComponent {
  link: string ;
  constructor(private http: HttpClient, private robotsService: RobotsService, private router : Router, private ngxLoader : NgxUiLoaderService) { }
  links : string[] = []
  ngOnInit(): void {
    this.getlinks();
    
  }
  getlinks()   {
    this.ngxLoader.start()
      this.robotsService.getlinks().subscribe(response => {
        this.links=response.link
        this.ngxLoader.stop()
        console.log("response",this.links)
      });
    }
  deleteLink(link : any){
    this.robotsService.deleteLink(link).subscribe(response =>{
      console.log(response)
      this.getlinks()
      //this.links = this.links.filter(links => link !== id);
    }, error => {
      console.log(error)
    }
    
    )}
  addLink() { 
    console.log(this.link)
    this.robotsService.addLink(this.link).subscribe(response => console.log(response), error => console.log(error))
    setTimeout(()=>{
      this.getlinks()    

    }, 500)
    this.link =''
  }
  deleteLinById(id:String){
    
    this.robotsService.deleteLinkById(id).subscribe(response => console.log(response), error => console.log(error))
    setInterval(()=>{
      this.getlinks();
      }
      ,1000)
    }
  get pagedLinks() {if (this.links) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.links.slice(startIndex, endIndex);
  } else {
    return [];
  }
  }
  currentPage = 1;
  itemsPerPage = 3;
  maxSize = 5;
  rotate = true;
  get totalLinks() {
    return this.links.length;
  }
  pageChanged(event: any): void {
    this.currentPage = event.page;
     }

     

  generateRobots() {
    console.log(this.links)
    // Combine the user-provided allowed and disallowed links into the robots.txt format
    /*const robots = `User-agent: *
Disallow: ${this.disallowedLinks.join(', ')}
Allow: /public`;*/
const robots = `User-agent: *
${this.links.map(link => `Disallow: ${link.link}`).join('\n')}
\nAllow: `;
    
    // Create a new blob with the robots.txt content
    const blob = new Blob([robots], { type: "text/plain" });

    // Create a new URL object and set the download attribute to automatically download the file
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("download", "robots.txt");
    a.setAttribute("href", url);

    // Click the link to download the file
    a.click();
  }
  }