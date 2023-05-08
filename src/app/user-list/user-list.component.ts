import { Component } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = [];
  selectedUser: any = {};
  showUpdateForm = false;
  currentPage = 1;
  itemsPerPage = 3;
  maxSize = 5;
  rotate = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }

  get totalUsers() {
    return this.users.length;
  }
  pageChanged(event: any): void {
    this.currentPage = event.page;
    // do whatever you need to do when the page changes, such as fetching data for the new page
  }

  get pagedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  updateUser(user : object) {
    this.selectedUser = user;
    this.showUpdateForm = true;
  }
  onUpdateComplete() {
    this.showUpdateForm = false;
  }
  onBackToList() {
    this.showUpdateForm = false;
  }

  deleteUser(userId : string) {
      this.userService.deleteUserById(userId).subscribe(() => {
        // Remove the deleted user from the users array
        this.users = this.users.filter(u => u.id !== userId);
      }, error => {
        console.log('Error deleting user:', error);
      }, () => {
        // Reload the users array after deletion is complete
        this.userService.getAllUsers().subscribe(users => {
          this.users = users;
        });
      });
    
  }
}
