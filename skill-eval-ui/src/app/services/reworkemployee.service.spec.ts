import { TestBed } from '@angular/core/testing';

import { ReworkemployeeService } from './reworkemployee.service';

describe('ReworkemployeeService', () => {
  let service: ReworkemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReworkemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
