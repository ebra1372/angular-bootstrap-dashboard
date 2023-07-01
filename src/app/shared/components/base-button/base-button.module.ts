import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseButtonComponent],
  exports: [BaseButtonComponent]
})
export class BaseButtonModule { }
