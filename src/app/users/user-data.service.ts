
import { Injectable } from '@angular/core';
import {User} from './user';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import {AuthService} from "../core/auth.service";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class UserDataService {
 user;
  private dbPath = '/users';
  afs: AngularFirestore;
  user$ = new Subject<User>();
  users$ = new Subject<any>();
  subscription: Subscription;
  auth;


  constructor(afs: AngularFirestore, public authService: AuthService) {
    this.afs = afs;
    this.subscription = this.authService.getMessage().subscribe(masseg => {
      this.auth = masseg.auth;

    });
    this.user = this.authService.currentUser;
  }


  createUser(auth) {
    this.afs.collection(this.dbPath).doc(auth.uid).set({
      key: auth.uid,
      email: auth.email,
      photo_url: auth.photoURL || 'https://zabavnik.club/wp-content/uploads/2018/02/kartinki_krutye_na_avatarku_16_01062324.jpg',
      phoneNumber: auth.phoneNumber,
      emailVerified: auth.emailVerified,
      displayName: auth.displayName
    });
  }

  updateUser(user) {
    this.afs.collection(this.dbPath).doc(user.key).set(
      {
        key: user.key,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        photo_url: user.photo_url,
        phoneNumber: user.phoneNumber,
        emailVerified: user.emailVerified,
        displayName: user.displayName
      }
    );
  }


  getCurrentUser() {
    if (!this.user) {
      this.user = this.authService.currentUser;
    }
    return this.user;
  }

  getUserList(){
    this.afs.collection(this.dbPath)
      .valueChanges()
      .subscribe(doc => {
        this.users$.next(doc);

    });
  }


  getUser(auth) {
    const d  = this.afs.collection(this.dbPath).doc(auth.uid).valueChanges();
      d.subscribe(doc => {
      if (doc) {
        this.user = doc;
        this.user$.next(this.user);
      } else {
        this.createUser(auth);
      }
    });
  }

  getUserByID(key, callback) {
    const d  = this.afs.collection(this.dbPath).doc(key).valueChanges();
    d.subscribe(doc => {
      if (doc) {
        callback(doc);
      }
    });
  }
  getUserByEmail(email, callback, errorCallback) {
    console.log(email);
    this.afs.collection(this.dbPath,
        ref => ref.where('email', '==', email))
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {

          const user = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...user};
        });

      }).subscribe( user => {
      if (user) {
        callback(user);
      } else {
        errorCallback('No such document!');
      }
      });
  }

   getMessage(): Observable<any> {
    return this.user$.asObservable();
  }
  getMessageUsers(): Observable<any> {
    return this.users$.asObservable();
  }


  private handleError(error) {
    console.log(error);
  }
}
