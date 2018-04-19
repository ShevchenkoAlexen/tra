import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../users/user-data.service';
import {User} from '../../users/user';
import {Subscription} from 'rxjs/Subscription';
import {TravelsService} from '../travels.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-travels-home',
  templateUrl: './travels-home.component.html',
  styleUrls: ['./travels-home.component.css']
})
export class TravelsHomeComponent implements OnInit {
  user: User;
  subUser: Subscription;
  subTravel: Subscription;
  subMember: Subscription;
  memberListObj = [];
  addTravel = 0;
  trName = '';
  trPlace = '';
  trDesc = '';

  constructor(public userService: UserDataService,
              public travelService: TravelsService,
              private route: ActivatedRoute,
              private router: Router) {
     this.subUser = this.userService.getMessage().subscribe(masseg => {
      this.user = masseg;
       this.travelService.getTravelMemberListUser(this.user);
     });
    this.subMember = this.travelService.getMessageTravelMember().subscribe(masseg => {
      console.log(masseg);
      this.memberListObj = masseg;
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.addTravel = +params['view'];
    });
    //this.addTravel = false;
    this.user = this.userService.getCurrentUser();
    if (this.user) {
      this.travelService.getTravelMemberListUser(this.user);
    }
  }




  addNewTravel() {
    this.router.navigate(['/travels', 1]);
  }

  onSubmit() {
    this.addTravel = 0;
    const travel = {
      name: this.trName,
      desc: this.trDesc,
      place: this.trPlace,
      userId: this.user.key
    };
    console.log(travel);
    this.travelService.createTravel(travel);

  }

}
