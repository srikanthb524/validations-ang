import { TestBed } from '@angular/core/testing';

import { HttpParamsService } from './http-params.service';

describe('HttpParamsService', () => {
  let service: HttpParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
