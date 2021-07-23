import { TestBed } from '@angular/core/testing';

import { FavouriteHeroService } from './favourite-hero.service';

describe('FavouriteHeroService', () => {
  let service: FavouriteHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
