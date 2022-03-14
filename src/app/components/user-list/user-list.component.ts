import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interface/User';
import { UserService } from 'src/app/services/user.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users!: User[];
  faTimes = faTimes;
  faPen = faPen;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  deleteUser(user: User) {
    this.userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }
}
