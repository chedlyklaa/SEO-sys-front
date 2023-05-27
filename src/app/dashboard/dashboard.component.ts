import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, Inject, ViewChild, ElementRef } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { FontModel,AnimationModel, ITextRenderEventArgs } from '@syncfusion/ej2-progressbar';
import { DashboardService } from '../service/dashboard.service';
import Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import { UserService } from '../service/user.service';
import { ThemesService } from '../service/themes.service';
import { PageService } from '../service/page.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  @ViewChild('chart', { static: true }) chartRef!: ElementRef;
  @ViewChild('default_dashboard')
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
 

    public dashboard: DashboardLayoutComponent;
    constructor(private http : HttpClient, private dashboardService : DashboardService, private userService : UserService, private themesService : ThemesService, private pagesService : PageService, private ngxLoader : NgxUiLoaderService) {
        
    }
    topQueries : []
    topQueriesCtr : []
    topQueriesClicks : []
    topQueriesImpressions : []
    topPages : []
    usersNumber : number // not used in the interface...
    pagesNumber : number // not used in the interface...
    themesNumber : number // not used in the interface...
    ClicksData : Object[] = []
    CtrData : Object[] = []
    topCountries : string[]= []
    clickXAxis: Object;
    clickYAxis: Object;
    ctrYAxis: Object;
    ctrXAxis : Object
    palette : string[] = []
    palette2 : string[] = []

    ngOnInit(){
      this.ngxLoader.start()
      this.dashboardService.getData().subscribe(response => {
        this.topQueries = response["top-queries"]
        this.topQueriesCtr = response["ctrs"]
        this.topQueriesClicks = response["clicks"]
        this.topQueriesImpressions = response["impressions"]
        this.topPages = response["top-pages"]
        this.ClicksData = response["click-per-date"].reverse()
        this.CtrData = response['ctrPerDate'].reverse()
        this.topCountries = response['topCountries']
        console.log(this.ClicksData)
        console.log(this.CtrData)

      })

      this.clickXAxis = {
        valueType: 'Category',
        title: 'Date'
    };
      this.clickYAxis = {
        minimum: 0, maximum: 20,
        interval: 5, title: 'Clicks'
    };
    this.ctrXAxis = {
      valueType: 'Category',
      title: 'Date'
  };
    this.ctrYAxis = {
      minimum: 0, maximum: 20,
      interval: 5, title: 'Ctr'
  };
      this.userService.getAllUsers().subscribe(response => {
        this.usersNumber = response.length
      })
      
      this.themesService.getAll().subscribe(response => {
        this.themesNumber = response.length
      })
      this.pagesService.getAllPages().subscribe(response => {
        this.pagesNumber = response.length
      })
      this.palette = ["#ffd100"];
      this.palette2=["#ff7b00"]
      this.trackThickness = 15;
      this.progressThickness = 15;
      this.value = 91;
      this.animation = { enable: true, duration: 2000, delay: 0 };
      this.labelStyle = { color: 'green', fontWeight: 'bold'};
      this.showProgressValue = true;
      this.ngxLoader.stop()
  }

  
    public animation: AnimationModel;
    public value: number;
    public trackThickness: number;
    public progressThickness: number;
    public labelStyle: FontModel;
    public showProgressValue: boolean;
    public textRender2(args: ITextRenderEventArgs): void {
        args.text = this.value.toString() + '%';
     }
    
    public cellSpacing: number[] = [10, 10];


}
