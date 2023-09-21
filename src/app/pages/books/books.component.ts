import { Component } from '@angular/core';
import { BOOKS } from 'src/app/Data/books.data';
import { Book } from 'src/app/Models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: [
  ]
})
export class BooksComponent {
  data: Book[] = [...BOOKS];
  displayedColumns: string[] = ['Id', 'Title', 'Author', 'ISBN', 'Genere', 'Available_Copies'];
}
