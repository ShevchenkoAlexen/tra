import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from "@angular/router";
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import {AuthService} from "./core/auth.service";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from "angularfire2/auth";

import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing/app-routing.module";

const routes = [
  {path: '', component: HomePageComponent},
 // {path: 'setup', component: SetupPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserLoginComponent,
    UserProfileComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'Tra'),
    BrowserModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AppRoutingModule

  ],
  providers:[AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
