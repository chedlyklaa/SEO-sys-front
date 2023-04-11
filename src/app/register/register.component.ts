import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService : UserService, private router : Router) {}
  username : string = ""
  email : string = ""
  password : string = ""
  role : string = ""
  error : string = ""
  proceedregister() {
    this.userService.createUser(this.username, this.email, this.password, this.role).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/users'])
      },
      error => {
        this.error = error.error.error
        }
    )

}
}
