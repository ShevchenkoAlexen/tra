import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.css']
})
export class TaskMenuComponent implements OnInit {

  @Input()task;
  @Input()user;
  @Input()memberList;
  @Output('updateTaskE')
  updateTaskEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
    console.log('menu');
  }
  onChenge(){
    console.log(this.task);
    this.updateTaskEvent.emit(this.task);
  }

}
