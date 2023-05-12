import { Component, ViewEncapsulation } from '@angular/core';
import { PageService } from '../service/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddPageComponent {
  isPopoverOpen = false;
  ogImage : string = "";
  ogTitle: string = "";
  ogDescription : string = "";
  page = {
    url: '',
    title: '',
    metaDescription: '',
    ogTags: {
      "og:image" : this.ogImage,
      "og:title" : this.ogTitle,
      "og:description" : this.ogDescription
    },
  };
  
  constructor(private pageService: PageService, private router : Router) { }

  onSubmit(): void {
    this.page.ogTags['og:image'] = this.ogImage
    this.page.ogTags['og:title'] = this.ogTitle
    this.page.ogTags['og:description'] = this.ogDescription
    this.pageService.addPage(this.page).subscribe(page => console.log(page), error => console.log(error))
    this.router.navigate(['/pages'])
  }
}