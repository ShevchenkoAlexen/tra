import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserLoginComponent} from '../users/user-login/user-login.component';
import {UserProfileComponent} from '../users/user-profile/user-profile.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {TravelsHomeComponent} from '../travels/travels-home/travels-home.component';
import {TravelPageComponent} from '../travels/travel-page/travel-page.component';
import {TaskPageComponent} from "../travels/task-page/task-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'login/:isNewUser', component: UserLoginComponent},
  {path: 'user', component: UserProfileComponent},
  {path: 'travels/:view', component: TravelsHomeComponent},
  {path: 'travel/:id', component: TravelPageComponent},
  {path: 'travel/:id/:view', component: TravelPageComponent},
  {path: 'task/:id', component: TaskPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
