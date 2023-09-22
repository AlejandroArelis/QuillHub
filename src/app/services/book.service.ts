import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { Book } from '../Models/book.model';
import { updateBook } from '../store/app.actions';
import { Observable, Subscription, filter, map } from 'rxjs';
import { selectBooks } from '../store/app.selectors';

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
}
