import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing';
import { LoadingModule } from 'components/loading/loading.module';
import { ProductDetailsModule } from "./product-details/product-details.module";
import { AddEditProductModule } from "./add-edit-product/add-edit-product.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    LoadingModule,
    ProductDetailsModule,
    AddEditProductModule
  ],
  declarations: [
    ProductsComponent,
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }