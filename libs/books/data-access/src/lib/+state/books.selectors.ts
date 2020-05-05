import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOOKS_FEATURE_KEY,
  booksAdapter,
  BooksPartialState,
  State
} from './books.reducer';

export const getBooksState = createFeatureSelector<BooksPartialState, State>(
  BOOKS_FEATURE_KEY
);

const { selectAll } = booksAdapter.getSelectors();

export const getBooksLoaded = createSelector(
  getBooksState,
  (state: State) => state.loaded
);

export const getBooksError = createSelector(
  getBooksState,
  (state: State) => state.error
);

export const getBooks = createSelector(getBooksState, selectAll);
