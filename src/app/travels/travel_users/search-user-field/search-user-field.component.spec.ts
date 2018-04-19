import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserFieldComponent } from './search-user-field.component';

xdescribe('SearchUserFieldComponent', () => {
  let component: SearchUserFieldComponent;
  let fixture: ComponentFixture<SearchUserFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
