import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { Book } from '../Models/book.model';
import { createBook, deleteBook, updateBook } from '../store/app.actions';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private _store: Store<{ app: AppState }>
  ) {}

  getAll() {
    return this._store.select('app');
  }

  updateBookById(updatedBook: Book): void {
    this._store.dispatch(updateBook({ book: updatedBook }));
  }

  getBookById(bookId: string) {
    return this.getAll().pipe(
      filter((response: AppState) => !!response.books),
      map((response: AppState) => response.books?.find(book => book.Id === bookId))
    );
  }

  createBook(newBook: Book): void {
    this._store.dispatch(createBook({ book: newBook }));
  }

  deleteBookById(bookId: string): void {
    this._store.dispatch(deleteBook({ bookId: bookId }));
  }
}
