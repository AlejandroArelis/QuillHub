import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/Models/book.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit, OnDestroy {
  data: Book[] | undefined = [];
  displayedColumns: string[] = [
    'Id',
    'Title',
    'Author',
    'ISBN',
    'Genere',
    'Available_Copies',
  ];

  appStateSubs!: Subscription;

  constructor(
    private _store: Store<{ app: AppState }>
  ) {}

  ngOnInit(): void {
    this.appStateSubs = this._store.select('app').subscribe((appState) => {
      this.data = appState.books;
    });
  }

  ngOnDestroy() {
    if (this.appStateSubs) {
      this.appStateSubs.unsubscribe();
    }
  }
}
