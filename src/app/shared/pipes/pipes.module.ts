import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';



@NgModule({
  declarations: [
    UnderscoreToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnderscoreToSpacePipe
  ]
})
export class PipesModule { }
