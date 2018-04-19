import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskComment} from "../comment/comment";


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() commentObj;
  commentText = '';
  newComment;
  @Input() user;
  @Output('addCommentE')
  addCommentEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.commentObj.id) {

      this.newComment = new TaskComment(this.commentObj);
      this.newComment.updatedBy(this.user.key);
      this.addCommentEvent.emit(this.newComment);
    } else {
      this.newComment = new TaskComment(this.commentObj);
      this.addCommentEvent.emit(this.newComment);
      this.commentObj.comment = ''
    }

  }

}
