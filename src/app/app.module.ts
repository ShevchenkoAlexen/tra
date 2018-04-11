import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import {AuthService} from './core/auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserDataService} from './users/user-data.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {TravelsModule} from './travels/travels.module';

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
    AngularFireModule.initializeApp(environment.firebase, 'Tra'),
    AngularFireAuthModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    TravelsModule


  ],
  providers: [AuthService, UserDataService, AngularFirestore],

  bootstrap: [AppComponent]
})
export class AppModule { }
