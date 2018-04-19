import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserDataService} from '../../users/user-data.service';
import {Subscription} from 'rxjs/Subscription';
import {TravelsService} from '../travels.service';
import { TravelPageComponent } from './travel-page.component';

xdescribe('TravelPageComponent', () => {
  let component: TravelPageComponent;
  let fixture: ComponentFixture<TravelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPageComponent ],
      imports:[ActivatedRoute, UserDataService, UserDataService, TravelsService, Subscription ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
