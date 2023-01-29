import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumToDatePipe } from '../num-to-date.pipe';

@NgModule({
  declarations: [NumToDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NumToDatePipe
  ]
})
export class PipeModule { }
