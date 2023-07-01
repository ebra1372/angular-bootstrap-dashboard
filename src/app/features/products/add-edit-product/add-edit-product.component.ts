import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { ProductsService } from 'services/products.service';
import { CategoriesService } from 'services/categories.service';
import { Product } from 'models/product.model';
import { ToastService } from 'services/toast.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  constructor(private productsService: ProductsService, private route: ActivatedRoute,
    private router: Router, private categoriesService: CategoriesService,
    private toastServie: ToastService) { }
  private subscription = new Subscription();
  private categoriesSubscription = new Subscription();
  isLoading = false;
  isEditing = false;
  categoriesList: string[] = [];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.isLoading = true;
      this.formGroup.disable();
      this.subscription = this.productsService.getById(Number(id))
        .pipe(finalize(() => {
          this.isLoading = false;
          this.formGroup.enable();
        }))
        .subscribe({
          next: (response: Product) => {
            this.formGroup.patchValue({ ...response })
          },
          error: (err: any) => { console.log(err) }
        });
    }

    this.categoriesSubscription = this.categoriesService.getAll()
      .pipe(finalize(() => {
        this.formGroup.get('category')?.enable();
      }))
      .subscribe({
        next: (response: string[]) => {
          this.categoriesList = [...response]
        },
        error: (err: any) => { console.log(err) }
      });

  }

  formGroup = new FormGroup({
    id: new FormControl<number | undefined>(0, { nonNullable: true }),
    title: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl(''),
    category: new FormControl({ value: "", disabled: true }, [Validators.required]),
  });

  get title() { return this.formGroup.get('title') }
  get price() { return this.formGroup.get('price') }
  get category() { return this.formGroup.get('category') }
  get description() { return this.formGroup.get('description') }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.formGroup.disable();
    this.isLoading = true;
    if (this.isEditing) { // edit product
      this.productsService.update(this.formGroup.value)
        .pipe(finalize(() => {
          this.isLoading = false;
          this.formGroup.enable();
        }))
        .subscribe({
          next: (response) => {
            if (response) {
              this.toastServie.showToast({ text: "محصول با موفقیت ویرایش شد" });
              this.router.navigate(['/products']);
            }
          },
          error: err => {
            this.toastServie.showToast({ text: err.error });
          }
        });
      return;
    };

    this.productsService.create(this.formGroup.value)
      .pipe(finalize(() => {
        this.isLoading = false;
        this.formGroup.enable();
      }))
      .subscribe({
        next: (response) => {
          if (response) {
            this.toastServie.showToast({ text: "محصول جدید با موفقیت ثبت شد" });
            this.router.navigate(['/products']);
          }
        },
        error: err => {
          this.toastServie.showToast({ text: err.error });
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.categoriesSubscription.unsubscribe()
  }
}