import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./core/auth.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "./users/user";
import {UserDataService} from "./users/user-data.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tra';
  auth: any;
  user: User;
  subscription: Subscription;
  subscriptionUser: Subscription;

  constructor(private router: Router,   public authService: AuthService, public userService: UserDataService){
    this.subscription = this.authService.getMessage().subscribe(masseg => {
      console.log(masseg);
      this.auth = masseg.auth;
      if (this.auth){
        this.login();
      } else
      {
        this.logout()
      }
    });
    this.subscriptionUser = this.userService.getMessage().subscribe( masseg => {
      console.log('userService.getMessage');
      console.log(masseg);
    })

  }
  ngOnInit() {
  }

  login(){
    this.userService.getUser();
  }

  logout(){
    this.router.navigate(['/']);
  }


  onClick(){
    this.router.navigate(['/login']);
  }

  onRegistr(){
    let isNewUser = 1;
    this.router.navigate(['/login',isNewUser]);
  }

  isAuth(){
    if (this.auth) return true;
    return false;
  }
  onLogOut(){
    this.authService.signOut();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
