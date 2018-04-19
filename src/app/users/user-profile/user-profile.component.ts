import {Component, Input, OnInit} from '@angular/core';

import {UserDataService} from '../user-data.service';
import {User} from '../user';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  subUser: Subscription;


  constructor(private router: Router, public userService: UserDataService) {
    this.subUser = this.userService.getMessage().subscribe(masseg => {
      this.user = masseg;
    });
  }


  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  onSubmit() {
    this.userService.updateUser(this.user);

  }

  deleteCustomer() {
    //   this.userData.deleteUser(this.user.key)
  }
}
