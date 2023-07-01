import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AddEditProductComponent } from "./add-edit-product/add-edit-product.component";

const routes: Routes = [
  { path: "", component: ProductsComponent, title: "لیست محصولات" },
  { path: "new", component: AddEditProductComponent, title: "محصول جدید" },
  { path: "edit/:id", component: AddEditProductComponent, title: "ویرایش محصول" },
  { path: "details/:id", component: ProductDetailsComponent, title: "جزئیات محصول" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class ProductsRoutingModule { }