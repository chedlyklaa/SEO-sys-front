import { Component,DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  @ViewChild('dockBar') dockBar: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '300px';
  public dockSize: string = '72px';
  toggleClick() {
      this.dockBar.toggle();
       this.enableDock = !this.enableDock;
  }
  title = 'authentication';
  isadmin=false;
  isMenuVisible=false;
  constructor(private route:Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
}
