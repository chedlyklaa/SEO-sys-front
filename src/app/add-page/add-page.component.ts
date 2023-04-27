import { Component } from '@angular/core';
import { PageService } from '../service/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {
  page = {
    url: '',
    title: '',
    metaDescription: '',
    themes: '',
    links: '',
    ogTags: {
      ogTagKeys : '',
      ogTagValues : ''
    },
  };
  
  constructor(private pageService: PageService, private router : Router) { }

  onSubmit(): void {
    this.pageService.addPage(this.page).subscribe(page => console.log(page), error => console.log(error))
    this.router.navigate(['/pages'])
  }
}