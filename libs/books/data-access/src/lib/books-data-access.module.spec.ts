import { expect } from 'chai';
import { async, TestBed } from '@angular/core/testing';
import { BooksDataAccessModule } from './books-data-access.module';

describe('ShopDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BooksDataAccessModule).to.exist;
  });
});
