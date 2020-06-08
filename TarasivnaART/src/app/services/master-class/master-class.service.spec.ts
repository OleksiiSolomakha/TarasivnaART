import { TestBed } from '@angular/core/testing';

import { MasterClassService } from './master-class.service';

describe('MasterClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterClassService = TestBed.get(MasterClassService);
    expect(service).toBeTruthy();
  });
});
