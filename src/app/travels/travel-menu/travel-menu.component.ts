import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-travel-menu',
  templateUrl: './travel-menu.component.html',
  styleUrls: ['./travel-menu.component.css']
})
export class TravelMenuComponent implements OnInit {
  @Input() travel;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  changeView(i){
    this.router.navigate(['/travel', this.travel.travelId, i]);
  }
}
