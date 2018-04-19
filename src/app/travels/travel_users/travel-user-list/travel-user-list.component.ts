import {Component, OnInit, Input, NgModule} from '@angular/core';
import {SearchUserFieldComponent} from '../search-user-field/search-user-field.component';

@Component({
  selector: 'app-travel-user-list',
  templateUrl: './travel-user-list.component.html',
  styleUrls: ['./travel-user-list.component.css']
})

@NgModule({
  imports: [SearchUserFieldComponent]
})



  export class TravelUserListComponent implements OnInit {

    @Input() memberList;
    @Input() travel;

    constructor() {
    }

    ngOnInit() {
    }

  }
