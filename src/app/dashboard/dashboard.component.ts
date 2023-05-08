import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { FontModel,AnimationModel, ITextRenderEventArgs } from '@syncfusion/ej2-progressbar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  @ViewChild('default_dashboard')
    public dashboard: DashboardLayoutComponent;
    constructor(private http : HttpClient) {
        
    }
    ngOnInit(){
      this.trackThickness = 20;
      this.progressThickness = 25;
      this.value = 50;
      this.animation = { enable: true, duration: 2000, delay: 0 };
      this.labelStyle = { color: '#000', fontWeight: 'bold'};
      this.showProgressValue = true;
    }
    public animation: AnimationModel;
    public value: number;
    public trackThickness: number;
    public progressThickness: number;
    public labelStyle: FontModel;
    public showProgressValue: boolean;
    public textRender2(args: ITextRenderEventArgs): void {
        args.text = '50';
     }

    
    public count: number = 8;
    public cellSpacing: number[] = [10, 10];
    public chartData: Object[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    public primaryXAxis: Object = {
        valueType: 'Category'
    }
    public lineData: any[] = [
     { x: 2013, y: 28 }, { x: 2014, y: 25 },{ x: 2015, y: 26 }, { x: 2016, y: 27 },
    { x: 2017, y: 32 }, { x: 2018, y: 35 }
    ];
    public piechart: any[] = [{ x: 'TypeScript', y: 13, text: 'TS 13%' }, { x: 'React', y: 12.5, text: 'Reat 12.5%' },{ x: 'MVC', y: 12, text: 'MVC 12%' },{ x: 'Core', y: 12.5, text: 'Core 12.5%' },{ x: 'Vue', y: 10, text: 'Vue 10%' },{ x: 'Angular', y: 40, text: 'Angular 40%' }];
    public piechart1: any[] = [
     { 'x': 'Chrome', y: 37, text: '37%' },
     { 'x': 'UC Browser', y: 17, text: '17%' },
     { 'x': 'iPhone', y: 19, text: '19%' },
     { 'x': 'Others', y: 4, text: '4%' },
     { 'x': 'Opera', y: 11, text: '11%' },
     { 'x': 'Android', y: 12, text: '12%' }
     ];
     public legendSettings: Object = {
        visible: false
    };
addPanel(): void {
    let panel: PanelModel[] = [{
        'id': this.count.toString(), 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
        content: '<span id="close" class="e-template-icon e-close-icon"></span><div class="text-align">' + this.count.toString() + '</div>'
    }];
    this.dashboard.addPanel(panel[0]);
    let closeIcon: any = document.getElementById(this.count.toString())?.querySelector('.e-close-icon');
    closeIcon.addEventListener('click', this.onCloseIconHandler.bind(this));
    this.count = this.count + 1;
}
onCloseIconHandler(event: any): void {
    if ((<HTMLElement>event.target).offsetParent) {
        this.dashboard.removePanel((<HTMLElement>event.target).offsetParent!.id);
    }
}
   
}
