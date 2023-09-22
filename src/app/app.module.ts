import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksModule } from './pages/books/books.module';
import { appReducer } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BooksModule,
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
