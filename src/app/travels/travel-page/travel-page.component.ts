import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDataService} from '../../users/user-data.service';
import {Subscription} from 'rxjs/Subscription';
import {TravelsService} from '../travels.service';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {
  subUser: Subscription;
  subTravel: Subscription;
  subMember: Subscription;
  travel;
  id = 0;
  memberList = [];
  memberListObj = [];
  user;
  view = 0;

  constructor(private route: ActivatedRoute,
              public userService: UserDataService,
              public travelService: TravelsService,
              private router: Router
  ) {
    this.subUser = this.userService.getMessage().subscribe(masseg => {
      this.user = masseg;
    });
    this.subTravel = this.travelService.getMessageTravel().subscribe(masseg => {
      this.travel = masseg;
      this.travelService.getTravelMemberList(this.travel);
    });
    this.subMember = this.travelService.getMessageTravelMember().subscribe(masseg => {
      this.memberListObj = masseg;
      this.getTravelMembers();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.travelService.getTravelMemberList({travelId:this.id});
      this.travelService.getTravelById(this.id, (x) => {
          this.travel = x;
        },
        (y) => console.log(y));
    });
    this.route.params.subscribe(params => {
      if (params['view'] !== undefined) {
        this.view = +params['view']
      } else {
        this.view = 0;
      }
    });
    this.user = this.userService.getCurrentUser();

  }


  getTravelMembers() {
    let mlO = {};
    for (let i = 0; i < this.memberListObj.length; i++) {
      this.userService.getUserByID(this.memberListObj[i].userKey,
        d => {
          d.role = this.memberListObj[i].role;
          mlO[this.memberListObj[i].userKey] = d;
          this.memberList = [];
          for (const index in mlO) {
            this.memberList.push(mlO[index]);
          }
        }
      );
    }

  }


  onSubmit() {
    this.travelService.updateTravel(this.travel);
  }

  onClickAddMember() {

  }

  changeView(i) {
    this.router.navigate(['/travel', this.id, i]);
    //this.view = i;
  }
}
