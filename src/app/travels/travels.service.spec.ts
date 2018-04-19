import { TestBed, inject } from '@angular/core/testing';

import { TravelsService } from './travels.service';
import {AngularFirestore} from "angularfire2/firestore";
const twainService = jasmine.createSpyObj('AngularFirestore', ['collection']);

describe('TravelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelsService,
        {provide: AngularFirestore, useValue: twainService}
      ],
    });
  });

  it('should be created', inject([TravelsService], (service: TravelsService) => {
    expect(service).toBeTruthy();
  }));
});
