import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducers';

export const selectAppState = (state: AppState) => state;

export const selectBooks = createSelector(
  selectAppState,
  (state) => state.books
);