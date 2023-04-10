import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  newPassword : string =""
  confirmPassword : string =""
  message : string = ""
  error : string = ""
  resetToken : string = ""
    constructor(private authService : AuthService, private route: ActivatedRoute){}
    ngOnInit(){
      this.route.params.subscribe(params => {
        this.resetToken = params['token'];
      });
    
    }

    changePassword(){
      if(this.newPassword === this.confirmPassword){
        this.authService.changePassword(this.resetToken, this.newPassword).subscribe(
          response => {
            this.message = response.message
          },
          error => {
            this.error = error.error.error
            console.log(this.error)
          }
        )
      }else{
        this.error = "Passwords does not match"
      }
    }
}
