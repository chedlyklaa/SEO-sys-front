import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-backlinks',
  templateUrl: './backlinks.component.html',
  styleUrls: ['./backlinks.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class BacklinksComponent implements OnInit {
  backlinks: any[] = [];
  websites: any[] = [];
  linkingPages : number = 0
  linkingWebsites : number = 0
  constructor(
    private backlinksService: DashboardService,
    private ngxLoader : NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxLoader.start()
    this.loadLinks();
    this.ngxLoader.stop()
  }

  loadLinks() {
    this.backlinksService.getBacklinks().subscribe((response) => {
      this.backlinks = response.backlinksData;
      this.websites = response.websitesData
      response.websitesData.forEach((item : any) => {
        this.linkingPages += item.linkingPage
      })
      this.linkingWebsites = response.websitesData.length
      console.log(this.linkingWebsites)
      console.log(this.linkingPages)
    });
  }
}
