import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../category';
import { ProductService } from '../product.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { Product, ProductPost } from '../product';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule],
  template: `
    <section>
      <form
        [formGroup]="applyForm"
        (submit)="submitApplication()"
        class="p-3"
      >
        <div class="mb-3">
          <label for="name">Nome: </label>
          <input id="name" type="text" formControlName="name" class="border p-1 w-96">
          <div *ngIf="name?.invalid && (name?.touched || name?.dirty)">
            <div *ngIf="name?.errors?.['required']">
              Obrigatório
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="category_id">Categoria: </label>
          <select id="category_id" formControlName="category_id" class="border p-1 w-fit">
            <option
              *ngFor="let category of categories"
              [value]="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="mb-3">
          <label for="price">Preço: </label>
          <input id="price" type="text" formControlName="price" class="border p-1 w-96">
          <div *ngIf="price?.invalid && (price?.touched || price?.dirty)">
            <div *ngIf="price?.errors?.['required']">
              Obrigatório
            </div>
            <div *ngIf="price?.errors?.['pattern']">
              Preço inválido
            </div>
          </div>
        </div>

        <div class="mb-3">
          <input id="perishable" type="checkbox" formControlName="perishable">
          <label for="perishable"> Perecível</label>
        </div>

        <div *ngIf="perishable?.value" class="mb-3">
          <mat-form-field>
            <label for="expiration">Vencimento: </label>
            <input
              id="expiration"
              formControlName="expiration"
              class="border p-1 w-fit"
              matInput
              [matDatepicker]="picker"
            >
            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
          <div *ngIf="expiration?.invalid && (expiration?.touched || expiration?.dirty)">
            <div *ngIf="expiration?.errors?.['required']">
              Obrigatório
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="amount">Quantidade: </label>
          <input id="amount" type="text" formControlName="amount" class="border p-1 w-96">
          <div *ngIf="amount?.invalid && (amount?.touched || amount?.dirty)">
            <div *ngIf="amount?.errors?.['required']">
              Obrigatório
            </div>
            <div *ngIf="amount?.errors?.['pattern']">
              Número inválido
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="p-2 bg-gray-600 rounded"
        >
          Cadastrar
        </button>
      </form>
    </section>
  `,
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  categories: Category[] = [];

  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category_id: new FormControl(1),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+(?:[.]\d{1,2}|$)$/)
    ]),
    expiration: new FormControl(null),
    amount: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]\d*$/)
    ]),
    perishable: new FormControl(false)
  });

  constructor(private productService: ProductService) {
    this.productService.getAllCategories()
      .subscribe(categories => this.categories = categories.data);
  }

  submitApplication() {
    // this.housingService.submitApplication(
    //   this.applyForm.value.firstName ?? '',
    //   this.applyForm.value.lastName ?? '',
    //   this.applyForm.value.email ?? ''
    // );
    if(this.applyForm.valid) {
      const product: ProductPost = {
        name: this.name?.value,
        category_id: Number(this.category?.value),
        price: Number(this.price?.value),
        expiration: this.expiration?.value,
        amount: Number(this.amount?.value),
        perishable: this.perishable?.value
      }
      this.productService.postNewProduct(product)
        .subscribe(result => console.log(result));
      console.log(this.applyForm.value);
    } else {
      this.applyForm.markAllAsTouched();
    }
  }

  
  get name() { return this.applyForm.get('name'); }
  get price() { return this.applyForm.get('price') }
  get expiration() { return this.applyForm.get('expiration') }
  get amount() { return this.applyForm.get('amount') }
  get perishable() { return this.applyForm.get('perishable') }
  get category() { return this.applyForm.get('category_id') }
  
}
