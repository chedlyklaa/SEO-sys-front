import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private authService: AuthService,private router: Router) {}
  result: any;
  email : string = ""
  error : string = ""
  message : string = ""
  //to modify to get user by email and verify the existance of the email and send the mail to the user
  sendResetPasswordEmail() {
    this.authService.resetPassword(this.email).subscribe(
      response => {
        this.message = response.message
        console.log(this.message)
      },
      error => {
        console.log(error.error.error)
        this.error = error.error.error
      }
    )
  }
}
