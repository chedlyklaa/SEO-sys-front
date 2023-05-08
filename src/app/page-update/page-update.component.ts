import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../Page';
import { PageService } from '../service/page.service';
@Component({
  selector: 'app-page-update',
  templateUrl: './page-update.component.html',
  styleUrls: ['./page-update.component.css']
})
export class PageUpdateComponent {
  @Input() page: any;
  @Output() updated = new EventEmitter<Page>();
  @Output() backToList = new EventEmitter<void>();
  constructor(private pageService : PageService){}
  onSubmit(): void {
    this.pageService.updatePageById(this.page._id, this.page).subscribe(response => console.log(response) )
    this.updated.emit(this.page);
  }

  goBack(): void {
    this.backToList.emit();
  }
}
