import { initialState, readingListAdapter } from './reading-list.reducer';
import {
  booksAdapter,
  initialState as booksInitialState
} from './books.reducer';
import * as ToReadSelectors from './reading-list.selectors';
import { createBook, createReadingListItem } from '@tmo/shared/testing';

describe('ReadingList Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      books: booksAdapter.addMany(
        [createBook('A'), createBook('B'), createBook('C')],
        {
          ...booksInitialState,
          error: 'Unknown error',
          loaded: true
        }
      ),
      readingList: readingListAdapter.addMany(
        [
          createReadingListItem('A'),
          createReadingListItem('B'),
          createReadingListItem('C')
        ],
        {
          ...initialState,
          error: 'Unknown error',
          loaded: true
        }
      )
    };
  });

  describe('Books Selectors', () => {
    it('getReadingList() should return the list of Books', () => {
      const results = ToReadSelectors.getReadingList(state);

      expect(results.length).toBe(3);
      expect(results.map(x => x.bookId)).toEqual(['A', 'B', 'C']);
    });

    it("getTotalUnread() should return the current 'loaded' status", () => {
      const result = ToReadSelectors.getTotalUnread(state);

      expect(result).toBe(3);
    });
  });
});
