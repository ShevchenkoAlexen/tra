import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TravelsService} from "../travels.service";

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.css']
})
export class TravelItemComponent implements OnInit {
  travel = {name: '', travelId: ''};
  @Input() member;

  constructor(public travelService: TravelsService, private router: Router) {

  }

  ngOnInit() {
    this.travelService.getTravelById(this.member.travelId,
      (x) => { this.travel = x },
      (y) => console.log(y)
      );
  }

  onClick() {
    this.router.navigate(['/travel', this.travel.travelId]);
  }

}
