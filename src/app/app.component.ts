import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {UserDataService} from './users/user-data.service';
import {User} from './users/user';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  auth: any;
  user: User;
  subscription: Subscription;
  subUser: Subscription;

  constructor(private router: Router,   public authService: AuthService, public userService: UserDataService) {
    this.subscription = this.authService.getMessage().subscribe(masseg => {
      this.auth = masseg.auth;
      if (this.auth) {
        this.login();
      } else {
        this.logout();
      }
    });
    this.subUser = this.userService.getMessage().subscribe( masseg => {

      this.user = masseg;
      console.log(this.user);
    });

  }
  ngOnInit() {
  }

  login() {
    console.log(this.auth);
    this.userService.getUser(this.auth);

  }

  logout() {
    this.router.navigate(['/']);
  }


  onClick() {
    this.router.navigate(['/login']);
  }

  onRegistr() {
    const isNewUser = 1;
    this.router.navigate(['/login', isNewUser]);
  }

  isAuth() {
    if (this.auth) { return true; }
    return false;
  }
  onLogOut() {
    this.authService.signOut();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
