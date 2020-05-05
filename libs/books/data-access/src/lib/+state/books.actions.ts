import { createAction, props } from '@ngrx/store';
import { Book } from '@tmo/shared/models';

export const searchBooks = createAction(
  '[Books Search Bar] Search Books',
  props<{ term: string }>()
);

export const searchBooksSuccess = createAction(
  '[Book Search Bar] Search Books Success',
  props<{ books: Book[] }>()
);

export const searchBooksFailure = createAction(
  '[Book Search Bar] Search Books Failure',
  props<{ error: any }>()
);

export const clearSearch = createAction('[Books Search Bar] Clear Search');
