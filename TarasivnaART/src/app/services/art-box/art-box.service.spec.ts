import { TestBed } from '@angular/core/testing';

import { ArtBoxService } from './art-box.service';

describe('ArtBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtBoxService = TestBed.get(ArtBoxService);
    expect(service).toBeTruthy();
  });
});
