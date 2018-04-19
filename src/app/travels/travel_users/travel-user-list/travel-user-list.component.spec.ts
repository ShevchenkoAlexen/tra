import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelUserListComponent } from './travel-user-list.component';

xdescribe('TravelUserListComponent', () => {
  let component: TravelUserListComponent;
  let fixture: ComponentFixture<TravelUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
