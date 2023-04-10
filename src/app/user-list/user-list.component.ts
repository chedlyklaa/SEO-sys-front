import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }

  addUser() {
    // logic for adding a new user
  }

  editUser(userId : string) {

  }

  deleteUser(userId : string) {
    this.userService.deleteUserById(userId).subscribe((user) =>{
      const index = this.users.findIndex(u => u.id === user.id);
      
      // Remove the deleted user from the users array
      this.users.splice(index, 1);

    }
    )
  }
}
