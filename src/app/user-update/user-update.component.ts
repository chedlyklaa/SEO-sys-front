import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UpdateUserComponent {
  @Input() user: any = {};
  @Output() updated = new EventEmitter<boolean>();
  constructor(private userService : UserService, private router : Router){}
  update() {
    this.userService.updateUserById(this.user._id, this.user).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/users'])
      }
    )
    this.updated.emit(true);
  }
}
