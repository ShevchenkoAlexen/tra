import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {TaskService} from "../task.service";
import {Task} from "../task/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() travel;
  @Input() memberList;
  @Input() user;
  subTaskList: Subscription;
  taskArrayAll;
  taskArray;
  addView;
  assigneeId = '';
  priority = 2;
  taskName = '';
  taskDescription = '';
  query = {
    author: 'all',
    status: 'all'
  };

  constructor(public taskService: TaskService) {
    this.subTaskList = this.taskService.getMessageTasks().subscribe(masseg => {
      this.taskArrayAll = masseg.map(item => new Task(item));
      this.changeView();
      console.log(this.taskArrayAll);
    });
  }

  ngOnInit() {
    this.taskService.getTaskList(this.travel);
  }

  addTaskView() {
    this.addView = true;
  }

  createTask() {
    let task = new Task({
      createdBy: this.user.key,
      createdName: this.user.displayName,
      assigneeId: this.assigneeId,
      assigneeName: this.user.displayName,
      priority: this.priority,
      taskName: this.taskName,
      travelId: this.travel.travelId,
      description: this.taskDescription,
      status: 1
    });
    this.taskService.createTask(task.getTaskObj());
    this.addView = false;
  }

  changeView() {
    this.taskArray = this.taskArrayAll.filter(task => {
      return task.filter(this.user, this.query)
    })
  }

}
