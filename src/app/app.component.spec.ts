import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthService} from "./core/auth.service";
import {AngularFirestore} from "angularfire2/firestore";
import {UserDataService} from "./users/user-data.service";
import {APP_BASE_HREF} from "@angular/common";
import {UserLoginComponent} from "./users/user-login/user-login.component";
import {UserProfileComponent} from "./users/user-profile/user-profile.component";
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {TravelsModule} from "./travels/travels.module";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule} from "@angular/forms";

xdescribe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomePageComponent,
        UserLoginComponent,
        UserProfileComponent

      ],  imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'Tra'),
        AngularFireAuthModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        TravelsModule
      ],
      providers: [AuthService,
        UserDataService,
        AngularFireAuth,
        AngularFirestore,
        { provide: APP_BASE_HREF, useValue: '/' } ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log(fixture);
    const app = fixture.debugElement.componentInstance;
    console.log(app);
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tra'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tra');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
