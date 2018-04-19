import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";

xdescribe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,
        AngularFireAuth, FirebaseApp]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
