import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TravelsService {
  travel: any;
  private dbPath = '/travels';
  private dbPathTM = '/travel_member';
  afs: AngularFirestore;
  travels$ = new Subject<any>();
  travel$ = new Subject<any>();
  travelMembers$ = new Subject<any>();

  constructor(afs: AngularFirestore) {
    this.afs = afs;
  }

  createTravelMember(trM) {
    this.travel = trM;
    this.afs.collection(this.dbPathTM).add(trM).then(pr => console.log(pr))
      .catch(error => this.handleError(error));
  }

  getTravelMemberList(tr) {
    this.afs.collection(this.dbPathTM, ref => ref.where('travelId', '==', tr.travelId)).snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const travel = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...travel};
        });
      }).subscribe(d => this.travelMembers$.next(d));
  }

  getTravelMemberListUser(user) {
    console.log("getTravelMemberListUser");
    console.log(user);

    this.afs.collection(this.dbPathTM, ref => ref.where('userKey', '==', user.key)).snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          console.log("getTravelMemberListUser");
          const travel = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...travel};
        });
      }).subscribe(d => this.travelMembers$.next(d));
  }

  createTravel(tr) {
    this.travel = tr;
    let trId = tr.userId + Date.now();
    this.afs.collection(this.dbPath).doc(trId).set(tr).then(pr => {
        this.createTravelMember({
          userKey: tr.userId,
          role: 'Руководитель',
          travelId: trId
        })
      }
    )
      .catch(error => this.handleError(error));
  }

  updateTravel(tr) {
    this.afs.collection(this.dbPath).doc(tr.trId).set(tr).catch(error => console.log(error));
  }

  getTravelListByCreatedId(userKey) {
    this.afs.collection(this.dbPath, ref => ref.where('userId', '==', userKey)).snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const travel = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...travel};
        });
      }).subscribe(d => this.travels$.next(d));
  }





  getTravelById(trId, callback, errorCollback) {
    console.log(trId);
    this.afs.collection(this.dbPath).doc(trId).valueChanges()
      .map(a => {

        let x = {travelId :trId, ...a};
        console.log(x);
        return x;
      }).subscribe(d => {
        if (d){
          callback(d)
        } else{
          errorCollback("error")
        }

    });
  }


  getCurrentTravel() {
    return this.travel;
  }


  getMessageTravels(): Observable<any> {
    console.log('getMessage()');
    return this.travels$.asObservable();
  }

  getMessageTravel(): Observable<any> {
    console.log('getMessage()');
    return this.travel$.asObservable();
  }

  getMessageTravelMember(): Observable<any> {
    console.log('getMessage()');
    return this.travelMembers$.asObservable();
  }

  private handleError(error) {
    console.log(error);
  }
}
