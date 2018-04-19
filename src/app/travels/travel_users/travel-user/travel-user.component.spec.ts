import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelUserComponent } from './travel-user.component';

xdescribe('TravelUserComponent', () => {
  let component: TravelUserComponent;
  let fixture: ComponentFixture<TravelUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
