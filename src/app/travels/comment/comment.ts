export class TaskComment {
  comment = {
    id: '',
    createdBy: '',
    comment: '',
    taskId: '',
    timeStamp: this.getTimeStamp(),
    createdDate: new Date(),
    lastUpdateBy: '',
    lastUpdateTimeStamp: this.getTimeStamp(),
    lastUpdateDate: new Date(),
  };

  constructor(obj: any) {
    this.comment = obj;
    let d = new Date();
    if (!this.comment.timeStamp) {
      this.comment.timeStamp = this.getTimeStamp();
    }
    if (!this.comment.createdDate) {
      this.comment.createdDate = d;
    }
    if (!this.comment.lastUpdateTimeStamp) {
      this.comment.lastUpdateTimeStamp = this.getTimeStamp();
    }
    if (!this.comment.lastUpdateDate) {
      this.comment.lastUpdateDate = d;
    }
  }

  updatedBy(userId) {
    this.comment.lastUpdateBy = userId;
    this.comment.lastUpdateTimeStamp = this.getTimeStamp();
    this.comment.lastUpdateDate = new Date();
  }

  getCommentText() {
    let c = '';
    if (this.comment.comment) {
      c = this.comment.comment;
    }
    return c
  }


  getCreatedDateStr() {
    return this.comment.timeStamp;
  }


  getCreatedBy() {
    return this.comment.createdBy;
  }

  getTaskId() {
    return this.comment.taskId;
  }

  getCommentObj() {
    return this.comment;
  }

  setCommentObj(obj) {
    this.comment = obj;
  }

  updateComment(obj) {
    let keys = Object.keys(obj);
    keys.forEach(item => this.comment[item] = obj[item])
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    return (date + ' ' + time);
  }
}
