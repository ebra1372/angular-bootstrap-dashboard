import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from 'models/product.model';
import { ProductsService } from "services/products.service";
import { ToastService } from 'services/toast.service';
import { ConfirmService } from 'services/confirm.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productsService: ProductsService, private router: Router, private toastServie: ToastService,
    private confirmService: ConfirmService
  ) { }
  private subscription = new Subscription();

  productsList: Product[] = [];
  isLoading = false;
  isDeleting = false;
  limit = 5;
  limitList = [
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "همه", value: 0 },
  ]

  getProducts() {
    this.isLoading = true;
    this.subscription = this.productsService.getAll(this.limit)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (res) => {
          this.productsList = [...res]
        },
        error: err => { console.log(err) }
      });
  }

  ngOnInit() {
    this.getProducts();
  }

  onChangeLimit() {
    this.getProducts();
  }

  public onNewProduct() {
    this.router.navigate(['products/new'])
  }

  public onShowDetailsProduct(id: number = 0) {
    this.router.navigate(['products/details', id])
  }

  public onEditProduct(id: number = 0) {
    this.router.navigate(['products/edit', id])
  }

  public onDeleteProduct(id: number = 0) {


    this.confirmService.showConfirm({
      title: "حذف",
      text: "آیا از حذف کردن این محصول اطمینان دارید ؟",
      onOk: () => {
        this.isDeleting = true;
        this.productsService.delete(id)
          .pipe(finalize(() => {
            this.isDeleting = false;
          }))
          .subscribe({
            next: (res) => {
              this.toastServie.showToast({ text: "محصول با موفقیت حذف شد" });
              this.getProducts();
            },
            error: err => { console.log(err) }
          });
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}