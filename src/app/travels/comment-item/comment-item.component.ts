import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment;
  @Input() memberList = [];
  @Input() user;
  createdBy = '';
  update = false;
  @Output('updateCommentE')
  updateCommentEvent = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit() {
    let i = this.memberList.filter(q => q.key === this.comment.getCreatedBy());
    if (!i[0]) {
      this.createdBy = 'Автор не найден'
    } else {
      this.createdBy = i[0].displayName
    }
  }

  onClick() {
    this.update = true;
  }

  updateComment(e) {
  this.update = false;
    this.updateCommentEvent.emit(e);
  }
}
