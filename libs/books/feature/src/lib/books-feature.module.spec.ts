import { expect } from 'chai';
import { async, TestBed } from '@angular/core/testing';
import { BooksFeatureModule } from './books-feature.module';

describe('ShopFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BooksFeatureModule).to.exist;
  });
});
