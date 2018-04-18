export class Task {
  task = {
    id:'',
    createdBy: '',
    assigneeId: '',
    priority: 2,
    taskName: '',
    travelId: '',
    description: '',
    status: 1,
    timeStamp: this.getTimeStamp(),
    createdDate: new Date()
  };

  constructor(obj: any) {
    this.task = obj;
    if (!this.task.timeStamp) {
      this.task.timeStamp = this.getTimeStamp();
    }
    if (!this.task.createdDate) {
      this.task.createdDate = new Date();
    }
  }

  filter(user, query) {
    let answerA = false;
    let answerQ = false;
    switch (query.author) {
      case 'all': {
        answerA = true;
        break;
      }
      case 'user': {
        answerA = (user.key === this.task.createdBy);
        break;
      }
      case 'member': {
        answerA = (user.key === this.task.assigneeId);
        break;
      }

      default: {
        answerA = true;
      }
    }

    switch (query.status) {
      case 'all': {
        answerQ = true;
        break;
      }
      case 'open': {
        answerQ = (1 === this.task.status);
        break;
      }
      case 'close': {
        answerQ = (2 === this.task.status);
        break;
      }
      default: {
        answerQ = true;
      }
    }

    return answerQ && answerA

  }

  getTaskName() {
    return this.task.taskName || 'Задача без названия'
  }

  getTaskStatus() {
    switch (this.task.status) {
      case 1:
        return 'Открыта';
      case 2:
        return 'Закрыта';
      default:
        return 'Открыта';
    }
  }

  getCreatedDateStr() {
    return this.task.timeStamp;
  }

  getAssigneeId() {
    return this.task.assigneeId;
  }

  getCreatedBy() {
    return this.task.createdBy;
  }

  getTaskPriority() {
    switch (+this.task.priority) {
      case 1:
        return 'Высокий';
      case 2:
        return 'Средний';
      case 3:
        return 'Низкий';
      default:
        return 'Средний';
    }
  }
  getTravelId() {
    return this.task.travelId;
  }
  getTaskObj() {
    return this.task;
  }

  setTaskObj(obj) {
    this.task = obj;
  }

  updateTask(obj) {
    let keys = Object.keys(obj);
    keys.forEach(item => this.task[item] = obj[item])
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    return (date + ' ' + time);
  }
}
