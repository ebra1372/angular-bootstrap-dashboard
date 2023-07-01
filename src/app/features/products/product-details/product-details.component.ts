import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { ProductsService } from 'services/products.service';
import { Product } from 'models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }
  private subscription = new Subscription();

  id: number = 0;
  isLoading: boolean = false;
  product: Product | undefined;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.isLoading = true;
    this.subscription = this.productsService.getById(this.id)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (res: any) => {
          this.product = res
        },
        error: (err: any) => { console.log(err) }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
};