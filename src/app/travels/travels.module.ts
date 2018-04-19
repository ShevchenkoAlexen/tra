import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelsHomeComponent} from './travels-home/travels-home.component';
import {AppComponent} from '../app.component';
import {TravelItemComponent} from './travel-item/travel-item.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TravelsService} from './travels.service';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { TravelUserComponent } from './travel_users/travel-user/travel-user.component';
import { TravelUserListComponent } from './travel_users/travel-user-list/travel-user-list.component';
import {SearchUserFieldComponent} from './travel_users/search-user-field/search-user-field.component';
import {AppModule} from '../app.module';
import {AppRoutingModule} from "../app-routing/app-routing.module";
import { TaskListComponent } from './task-list/task-list.component';
import {TaskService} from "./task.service";
import { TaskItemComponent } from './task-item/task-item.component';
import { TravelMenuComponent } from './travel-menu/travel-menu.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {CommentService} from "./comment.service";
import { CommentItemComponent } from './comment-item/comment-item.component';
import { TaskMenuComponent } from './task-menu/task-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [TravelsHomeComponent,
    TravelItemComponent,
    TravelPageComponent,
    TravelUserComponent,
    TravelUserListComponent,
    SearchUserFieldComponent,
    TaskListComponent,
    TaskItemComponent,
    TravelMenuComponent,
    TaskPageComponent,
    AddCommentComponent,
    CommentItemComponent,
    TaskMenuComponent
  ],
  providers: [TravelsService, TaskService, CommentService],

  bootstrap: [AppComponent]
})
export class TravelsModule {
}
