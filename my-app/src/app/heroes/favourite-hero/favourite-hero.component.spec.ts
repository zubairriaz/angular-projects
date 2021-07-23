import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteHeroComponent } from './favourite-hero.component';

describe('FavouriteHeroComponent', () => {
  let component: FavouriteHeroComponent;
  let fixture: ComponentFixture<FavouriteHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
