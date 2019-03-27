import { TestBed, inject } from '@angular/core/testing';

import { SpotService } from './spot.service';

describe('RegionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotService]
    });
  });

  it('should be created', inject([SpotService], (service: SpotService) => {
    expect(service).toBeTruthy();
  }));
});
