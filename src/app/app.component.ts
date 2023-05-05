import { Component,DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { AuthService } from './service/auth.service';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-angular-popups';

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
  constructor(private route:Router, private authService : AuthService){}
  ngOnInit(){
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.username = JSON.parse(localStorage.getItem('user')!).username;
    });
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
  ngAfterViewInit() {
    //createSpinner() method is used to create spinner
    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById('container')!
    });

    // showSpinner() will make the spinner visible
    showSpinner(document.getElementById('container')!);

    setInterval(function(){
      // hideSpinner() method used hide spinner
      hideSpinner(document.getElementById('container')!);
    }, 1000);
  }
}
