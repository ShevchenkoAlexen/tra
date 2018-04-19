import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';
import { TravelsHomeComponent } from './travels-home.component';


@Component({selector: 'app-travel-item', template: ''})
class TravelItemComponent {}

xdescribe('TravelsHomeComponent', () => {
  let component: TravelsHomeComponent;
  let fixture: ComponentFixture<TravelsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
