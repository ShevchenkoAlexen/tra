import {Component, Input, OnInit} from '@angular/core';
import {UserDataService} from '../../../users/user-data.service';
import {TravelsService} from '../../travels.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-search-user-field',
  templateUrl: './search-user-field.component.html',
  styleUrls: ['./search-user-field.component.css']
})
export class SearchUserFieldComponent implements OnInit {
  email;
  subUsers: Subscription;
  @Input() travel;
  users;
  userKey;


  constructor(public userService: UserDataService, public travelService: TravelsService) {
    this.subUsers = this.userService.getMessageUsers().subscribe(masseg => {
      console.log('пришли пользователи');
      this.users = masseg;
      console.log(this.users);
    });
  }

  ngOnInit() {
    this.userService.getUserList();
  }

  addMember() {

    console.log(this.userKey);
    this.travelService.createTravelMember({
      travelId: this.travel.travelId,
      userKey: this.userKey,
      role: 'Участник'
    })

  }

  addMemberArrayToTravel(arr) {
    console.log(this.travel);
    const mem = arr.map(item => {
      return {
        userKey: item.id,
        role: 'Участник'
      };
    });
    this.travel.memberList = this.travel.memberList.concat(mem);
    console.log(this.travel.memberList);
    this.travelService.updateTravel(this.travel);
  }


}
