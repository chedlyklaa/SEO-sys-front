import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userRole : string = ""
  username : string = ""
  constructor(private authService : AuthService){}
  ngOnInit(){
    this.userRole = this.authService.getRole()
    this.username = JSON.parse(localStorage.getItem('user')!).username;
  }
  sendEmail(){
    const receiver = 'mootazkhabbouchi8@gmail.com';
    const subject = encodeURIComponent('[SEO SYSTEM : Action access problem with current role]');
    const mailtoUrl = `mailto:${receiver}?subject=${subject}`;
    window.open(mailtoUrl);
  }
}
