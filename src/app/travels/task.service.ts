import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";


@Injectable()
export class TaskService {
  private dbPath = '/tasks';
  afs: AngularFirestore;
  tasks$ = new Subject<any>();
  task$ = new Subject<any>();


  constructor(afs: AngularFirestore) {
    this.afs = afs;
  }
  getMessageTasks(): Observable<any> {
    return this.tasks$.asObservable();
  }
  getMessageTask(): Observable<any> {
    return this.task$.asObservable();
  }

  getTask(id){
    this.afs.collection(this.dbPath).doc(id).valueChanges().subscribe( task => {
      this.task$.next({id, ...task});
    });
  }
  updateTask(tr) {
    this.afs.collection(this.dbPath).doc(tr.id).set(tr)
      .then(e => console.log(e))
      .catch(error => console.log(error));
  }
  getTaskList(tr){
    console.log(tr);
    this.afs.collection(this.dbPath,  ref => ref.where('travelId', '==', tr.travelId)).snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const task = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...task};
        });
      }).subscribe(d => this.tasks$.next(d));

  }


  createTask(task){
    this.afs.collection(this.dbPath).add(task).then(pr => console.log(pr))
      .catch(error => this.handleError(error));
  }

  handleError(error){
    console.log(error)
  }


}
