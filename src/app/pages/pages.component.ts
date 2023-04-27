import { Component } from '@angular/core';
import { PageService } from '../service/page.service';
import { Page } from '../Page';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  pages : Page[] = []
  constructor(private pageService : PageService){}
  ngOnInit(){
    this.loadPages();
  }
  loadPages(){
    this.pageService.getAllPages().subscribe(pages => this.pages = pages)
  }
  deletePage(pageId : string){
    this.pageService.deletePage(pageId).subscribe(
      response => {
        console.log(response)
        this.pages = this.pages.filter(p => p._id !== pageId);
      }
      )
    this.loadPages();
  }
}
