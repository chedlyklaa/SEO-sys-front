import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-unauth-page',
  templateUrl: './unauth-page.component.html',
  styleUrls: ['./unauth-page.component.css']
})
export class UnauthPageComponent {
  userRole : string
  constructor(private authService : AuthService) {}
  ngOnInit(){
    this.userRole = this.authService.getRole()
    console.log(this.userRole)
  }
  sendEmail(){
    const receiver = 'mootazkhabbouchi8@gmail.com';
    const subject = encodeURIComponent('[SEO SYSTEM : Action access problem with current role]');
    const mailtoUrl = `mailto:${receiver}?subject=${subject}`;
    window.open(mailtoUrl);
  }
}
