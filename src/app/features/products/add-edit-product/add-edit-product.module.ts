import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditProductComponent } from './add-edit-product.component';
import { BaseButtonModule } from 'components/base-button/base-button.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BaseButtonModule,
    RouterModule
  ],
  declarations: [AddEditProductComponent],
  exports: [AddEditProductComponent]
})
export class AddEditProductModule { }