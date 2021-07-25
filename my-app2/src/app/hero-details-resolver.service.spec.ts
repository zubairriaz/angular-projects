import { TestBed } from '@angular/core/testing';

import { HeroDetailsResolverService } from './hero-details-resolver.service';

describe('HeroDetailsResolverService', () => {
  let service: HeroDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
