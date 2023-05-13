import { Component,DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { AuthService } from './service/auth.service';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-angular-popups';
import  { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('dockBar') dockBar: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '250px';
  public dockSize: string = '72px';
  isLoggedIn : boolean
  username : string
  toggleClick() {
      this.dockBar.toggle();
       this.enableDock = !this.enableDock;
  }
  constructor(private route:Router, private authService : AuthService, private ngxLoader : NgxUiLoaderService){}
  ngOnInit(){
    this.ngxLoader.start()
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.username = JSON.parse(localStorage.getItem('user')!).username;
      this.ngxLoader.stop
    });
    this.ngxLoader.stop()
  }
  isActive(route: string): boolean {
    return this.route.isActive(route, false);
  }
  userLogout(){
    this.authService.logout()
    this.isLoggedIn = false
    setTimeout(()=>{
      this.route.navigate(['/login'])

    }, 1000)
  }
}
