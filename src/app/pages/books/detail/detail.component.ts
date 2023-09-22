import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { isbnValidator } from 'src/app/shared/Validators/ISBN.validator';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  form: FormGroup;
  new = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _bookService: BookService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.form = this._formBuilder.group({
      Id: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Author: ['', [Validators.required]],
      ISBN: ['', [Validators.required, isbnValidator()]],
      Genere: ['', [Validators.required]],
      Available_Copies: ['', [Validators.required]],
    });

    this._route.params.subscribe((params: Params) => {
      const Id = params['id'];

      if (Id === 'new') {
        this.new = true;
        this.form.patchValue({ Id: uuidv4() });
      } else {
        this.form.patchValue({ Id });
      }
    });
  }

  ngOnInit(): void {
    if(!this.new) {
      this._bookService.getBookById(this.form.value.Id).subscribe((book: any) => {
        this.form.patchValue(book);
      });
    }
  }

  action() {
    if (!this.new) {
      this._bookService.updateBookById(this.form.value);
    } else {
      this._bookService.createBook(this.form.value);
    }
    this._router.navigate(['...']);
  }

  delete() {
    this._bookService.deleteBookById(this.form.value.Id);
    this._router.navigate(['...']);
  }
}
