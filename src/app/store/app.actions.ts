import { createAction, props } from '@ngrx/store';
import { Book } from '../Models/book.model';

export const updateBook = createAction('[Book] Update Book', props<{ book: Book }>());
export const createBook = createAction('[Book] Create Book', props<{ book: Book }>());
export const deleteBook = createAction('[Book] Delete Book', props<{ bookId: string }>());