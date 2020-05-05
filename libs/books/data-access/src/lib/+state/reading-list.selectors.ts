import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksPartialState } from './books.reducer';
import { getBooks } from './books.selectors';
import {
  READING_LIST_FEATURE_KEY,
  readingListAdapter,
  ReadingListPartialState,
  State
} from './reading-list.reducer';
import { Book, ReadingListItem } from '@tmo/shared/models';

export const getReadingListState = createFeatureSelector<
  ReadingListPartialState,
  State
>(READING_LIST_FEATURE_KEY);

const {
  selectEntities,
  selectAll,
  selectTotal
} = readingListAdapter.getSelectors();

export const getReadingListEntities = createSelector(
  getReadingListState,
  selectEntities
);

export interface ReadingListBook extends Book, Omit<ReadingListItem, 'bookId'> {
  isAdded: boolean;
}

export const getAllBooks = createSelector<
  BooksPartialState & ReadingListPartialState,
  Book[],
  Record<string, ReadingListItem>,
  ReadingListBook[]
>(getBooks, getReadingListEntities, (books, entities) => {
  return books.map(b => ({ ...b, isAdded: Boolean(entities[b.id]) }));
});

export const getReadingList = createSelector(getReadingListState, selectAll);

export const getTotalUnread = createSelector(getReadingListState, selectTotal);
