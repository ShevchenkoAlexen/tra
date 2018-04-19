import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-travel-user',
  templateUrl: './travel-user.component.html',
  styleUrls: ['./travel-user.component.css']
})
export class TravelUserComponent implements OnInit {

  @Input() member;
  constructor() { }

  ngOnInit() {
  }

}
