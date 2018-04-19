import { TestBed, inject } from '@angular/core/testing';
import { UserDataService } from './user-data.service';
import {AngularFirestore} from "angularfire2/firestore";
const twainService = jasmine.createSpyObj('AngularFirestore', ['collection']);

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserDataService,
        {provide: AngularFirestore, useValue: twainService}
      ],
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
