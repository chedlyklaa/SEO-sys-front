import { Component } from '@angular/core';
import { PageService } from '../service/page.service';
import { Page } from '../Page';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  showUpdateForm : boolean = false
  selectedPage : Page;
  pages : Page[] = []
  constructor(private pageService : PageService, private router : Router, private ngxLoader : NgxUiLoaderService){}
  ngOnInit(){
    this.ngxLoader.start()
    this.loadPages();
    this.ngxLoader.stop()
  }
  loadPages(){
    this.ngxLoader.start()
    this.pageService.getAllPages().subscribe(pages => {
      this.pages = pages,
      this.ngxLoader.stop()
    })
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
  showUpdatePageForm(page : Page){
    this.selectedPage = page
    this.showUpdateForm = true
  }
  toggleUpdateForm() {
    this.showUpdateForm = !this.showUpdateForm;
  }

  onUpdateComplete() {
    this.toggleUpdateForm();
  }

  onBackToList() {
    this.router.navigate(['/pages'])
  }
}
