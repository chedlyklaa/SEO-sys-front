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
    constructor(private http : HttpClient, private dashboardService : DashboardService, private userService : UserService, private themesService : ThemesService, private pagesService : PageService) {
        
    }
    topQueries : []
    topQueriesCtr : []
    topQueriesClicks : []
    topQueriesImpressions : []
    topPages : []
    usersNumber : number
    pagesNumber : number
    themesNumber : number
    ClicksData : Object[] = []
    CtrData : Object[] = []
    topCountries : string[]= []
    clickXAxis: Object;
    clickYAxis: Object;
    ctrYAxis: Object;
    ctrXAxis : Object
    palette : string[] = []

    ngOnInit(){
      this.dashboardService.getData().subscribe(response => {
        this.topQueries = response["top-queries"]
        this.topQueriesCtr = response["ctrs"]
        this.topQueriesClicks = response["clicks"]
        this.topQueriesImpressions = response["impressions"]
        this.topPages = response["top-pages"]
        response["click-per-date"].forEach((clickPerDate : Object) => {
          this.ClicksData.push(clickPerDate)
        });
        response["ctrPerDate"].forEach((ctrPerDate : Object) => {
          this.CtrData.push(ctrPerDate)
        })
        this.topCountries = response['topCountries']
        console.log(this.topCountries)
      })
      console.log(this.ClicksData)
      console.log(this.CtrData)
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
      this.palette = ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"];
      this.trackThickness = 5;
      this.progressThickness = 15;
      this.value = 91;
      this.animation = { enable: true, duration: 2000, delay: 0 };
      this.labelStyle = { color: 'green', fontWeight: 'bold'};
      this.showProgressValue = true;
      
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
    showMap : boolean = false
    bubbleData = [{ code3: "TUN", z: 105 }, { code3: "TUN", z: 1000}];
    chartOptions: Highcharts.Options = {
      chart: {
        borderWidth: 1,
        map: worldMap
      },
  
      title: {
        text: "Ijeni Usage Word Map"
      },
  
      subtitle: {
        text: "Representative map chart of ijeni users around the world"
      },
  
      legend: {
        enabled: false
      },
  
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom"
        }
      },
  
      series: [
        {
          type: "map",
          name: "Countries",
          color: "#E0E0E0",
          enableMouseTracking: false
        },
        {
          type: "mapbubble",
          name: "Most Users (Impressions)",
          joinBy: ["iso-a3", "code3"],
          data: this.bubbleData,
          minSize: 4,
          maxSize: "12%",
          tooltip: {
            pointFormat: "{point.properties.hc-a2}: {point.z}"
          }
        }
      ]
    };
    toggleMap(){
      this.showMap = !this.showMap
    }

}
