import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFirestore} from "angularfire2/firestore";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CommentService {
  private dbPath = '/comments';
  afs: AngularFirestore;
  comments$ = new Subject<any>();
  comment$ = new Subject<any>();


  constructor(afs: AngularFirestore) {
    this.afs = afs;
  }

  getMessageComments(): Observable<any> {
    return this.comments$.asObservable();
  }

  getMessageComment(): Observable<any> {
    return this.comment$.asObservable();
  }

  getComment(id) {
    this.afs
      .collection(this.dbPath)
      .doc(id)
      .valueChanges()
      .subscribe(comment => {
        this.comment$.next({id, ...comment});
      });
  }
  updateComment(tr) {
    this.afs.collection(this.dbPath).doc(tr.id).set(tr)
      .then(e => console.log(e))
      .catch(error => console.log(error));
  }
  getCommentList(tr) {
    console.log(tr);
    this.afs.collection(this.dbPath,
      ref =>
        ref.where('taskId', '==', tr.taskId))
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const comment = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...comment};
        });
      }).subscribe(d => this.comments$.next(d));

  }


  createComment(comment) {
    this.afs.collection(this.dbPath).add(comment).then(pr => console.log(pr))
      .catch(error => this.handleError(error));
  }

  handleError(error) {
    console.log(error)
  }
}
