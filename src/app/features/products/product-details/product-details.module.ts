import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { LoadingModule } from 'components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ],
  declarations: [
    ProductDetailsComponent
  ],
})
export class ProductDetailsModule { }