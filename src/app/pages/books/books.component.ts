import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/Models/book.model';
import { BookService } from 'src/app/services/book.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: [
  ]
})
export class BooksComponent implements OnInit, OnDestroy {
  // data$: Observable<Book[]> = this.store.pipe(select(selectBooks));
  data: Book[] | undefined = [];
  displayedColumns: string[] = ['Id', 'Title', 'Author', 'ISBN', 'Genere', 'Available_Copies'];


  appStateSubs!: Subscription;

  constructor(
    private _bookService: BookService,
    private _store: Store<{ app: AppState }>
  ) {
    // this.data = [];
  }

  ngOnInit(): void {
    this.appStateSubs = this._store
      .select('app')
      .subscribe((appState) => {
        this.data = appState.books;
      });
  }

  ngOnDestroy() {
    if (this.appStateSubs) {
      this.appStateSubs.unsubscribe();
    }
  }
}
