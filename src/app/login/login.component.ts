import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  email : string = ""
  password : string = ""
  error : string = ""
  proceedlogin() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response && response.token) {
          // login successful, user object in response
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response.user))
          this.router.navigate(['/'])
        } else {
          // login failed, error object in response
          console.log(response.error);
        }
      },
      error => {
        this.error = error.error.error
      }
    )
  }
}
