import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserDataService} from "../../users/user-data.service";
import {TravelsService} from "../travels.service";
import {TaskService} from "../task.service";
import {Task} from "../task/task";
import {TaskComment} from "../comment/comment";
import {Subscription} from "rxjs/Subscription";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  task;
  commentObj = {
    taskId: '',
    createdBy: '',
    comment: ''
  };
  taskId = '';
  subTask: Subscription;
  user;
  subUser: Subscription;
  subTravel: Subscription;
  subMember: Subscription;
  subComment: Subscription;
  travel;
  memberListObj;
  memberList = [];
  commentArray = [];
  updateDesc = false;
  updateName = false;

  constructor(public userService: UserDataService,
              public travelService: TravelsService,
              private route: ActivatedRoute,
              private router: Router,
              public taskService: TaskService,
              public commentService: CommentService) {
    this.subTask = this.taskService.getMessageTask().subscribe(masseg => {
      this.task = new Task(masseg);

      this.travelService.getTravelMemberList(this.task.getTaskObj());
      this.travelService.getTravelById(this.task.getTravelId(), (x) => {
          this.travel = x;
        },
        (y) => console.log(y));
    });
    this.subUser = this.userService.getMessage().subscribe(masseg => {
      this.user = masseg;
      this.initComNewObj();
    });
    this.subMember = this.travelService.getMessageTravelMember().subscribe(masseg => {
      this.memberListObj = masseg;
      this.commentService.getCommentList({taskId: this.taskId});
      this.getTravelMembers()
    });
    this.subTravel = this.travelService.getMessageTravel().subscribe(masseg => {
      this.travel = masseg;
      this.travelService.getTravelMemberList(this.travel);
    });
    this.subComment = this.commentService.getMessageComments().subscribe(masseg => {
      this.commentArray = masseg.sort((x, y) => {
        return x.createdDate > y.createdDate
      })
        .map(x => new TaskComment(x));
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      this.taskService.getTask(this.taskId);
    });
    this.user = this.userService.getCurrentUser();
    if (this.user) {
      this.initComNewObj();
    }
  }

  initComNewObj(){
    this.commentObj = {
      taskId: this.taskId,
      createdBy: this.user.key,
      comment: ''
    };
  }
  addComment(e) {
    console.log(e);
    this.commentService.createComment(e.getCommentObj());
  }

  updateComment(e) {
    console.log("update comment");
    this.commentService.updateComment(e.getCommentObj());

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

  updateNameB(){
    this.updateName = true;
  }
  onClickName(){
    this.updateName = false;
    this.taskService.updateTask(this.task.getTaskObj());
    console.log(this.task);
  }
  updateDescription() {
    this.updateDesc = true;
  }

  onClickDescription() {
    this.updateDesc = false;
    this.taskService.updateTask(this.task.getTaskObj());
    console.log(this.task);
  }

  updateTask(e){
    this.taskService.updateTask(e.getTaskObj());
  }
}
