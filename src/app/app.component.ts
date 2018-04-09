import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./core/auth.service";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tra';
  isAuth: boolean;
  constructor(private router: Router,   public authService: AuthService ){

  }
  ngOnInit() {

  }
  onClick(){
    console.log(this.router);
    this.router.navigate(['/login']);
  }
  isAuthM(){
    this.isAuth = this.authService.isAuth();
  }
  onLogOut(){
    this.authService.signOut();
  }

}
