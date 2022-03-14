import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  title: string = 'Registration System';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe((users) => (this.users = users));
  }

  creatUser(user: User) {
    this.userService
      .createUser(user)
      .subscribe((user) => this.users.push(user));
  }
}
