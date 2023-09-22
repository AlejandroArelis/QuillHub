import { createAction, props } from '@ngrx/store';
import { Book } from '../Models/book.model';

export const updateBook = createAction('[Book] Update Book', props<{ book: Book }>());