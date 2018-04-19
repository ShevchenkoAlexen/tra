import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  @Input() memberList;
  @Input() user;
  assigneeName;
  createdName;


  constructor( private router: Router){
  }

  ngOnInit() {
    this.assigneeName = this.getMemberNameById(this.task.getAssigneeId());
    this.createdName = this.getMemberNameById(this.task.getCreatedBy());
  }

  getMemberNameById(userId) {
    let str = '';
    for (let i = 0; i < this.memberList.length; i++) {
      if (this.memberList[i].key === userId) {
        str = this.memberList[i].displayName;
        break;
      }
    }
    if (str === '') {
      return 'Не назначено';
    }
    return str;
  }

  onClick(){
    let i = this.task.id;
    this.router.navigate(['/task', this.task.task.id]);
  }

}
