import { createReducer, on } from '@ngrx/store';
import { Book } from '../Models/book.model';
import { createBook, deleteBook, updateBook } from './app.actions';
import { BOOKS } from '../Data/books.data';

export interface AppState {
  books?: Book[];
}

export const initialState: AppState = {
  books: BOOKS
};

export const appReducer = createReducer(
  initialState,
  on(updateBook, (state, { book }) => ({
    ...state,
    books: state?.books?.map(existingBook => {
      if (existingBook.Id === book.Id) {
        return { ...existingBook, ...book };
      }
      return existingBook;
    })
  })),
  on(createBook, (state, { book }) => ({
    ...state,
    books: [...(state?.books || []), book]
  })),
  on(deleteBook, (state, { bookId }) => ({
    ...state,
    books: state?.books?.filter(book => book.Id !== bookId)
  }))
);