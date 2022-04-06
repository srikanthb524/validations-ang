import { TestBed } from '@angular/core/testing';

import { GetuserService } from './getuser.service';

describe('GetuserService', () => {
  let service: GetuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
