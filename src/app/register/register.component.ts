import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService : UserService) {}
  username : string = ""
  email : string = ""
  password : string = ""
  role : string = ""
  error : string = ""
  proceedregister() {
    this.userService.createUser(this.username, this.email, this.password, this.role).subscribe(
      response => {
        console.log(response)
      },
      error => {
        this.error = error.error.error
        }
    )

}
}
