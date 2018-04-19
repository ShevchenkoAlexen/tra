import {Injectable, NgModule} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {FirebaseApp} from "angularfire2";

@NgModule ({
  providers: [AngularFireAuth, FirebaseApp]
})




@Injectable()
export class AuthService {
  authState: any = null;
  private subject = new Subject<any>();

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.subject.next({ auth: this.authState });
    });
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  get isAuth(): any {
    return this.authState !== null;
  }
  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true;
    } else {
      return false;
    }
  }

  saveUser() {

  }
  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;

        this.saveUser();
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
  resetPassword(email: string) {
    console.log('Восстановление пароля');
    return true;

  }
}
