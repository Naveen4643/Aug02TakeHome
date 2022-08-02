import { TestBed } from '@angular/core/testing';

import { MgmtServiceService } from './mgmt-service.service';

describe('MgmtServiceService', () => {
  let service: MgmtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgmtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
