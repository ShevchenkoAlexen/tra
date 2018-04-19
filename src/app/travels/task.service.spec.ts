import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import {AngularFirestore} from "angularfire2/firestore";
const twainService = jasmine.createSpyObj('AngularFirestore', ['collection']);

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService,
        {provide: AngularFirestore, useValue: twainService}
      ],
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
