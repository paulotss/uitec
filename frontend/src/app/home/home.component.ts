import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <div
      [routerLink]="['product/new']"
      class="p-2 bg-green-500 mb-3 cursor-pointer rounded w-fit"
    >
      Novo produto
    </div>
    <div class="grid grid-cols-7 text-xs p-1">
      <div>Nome</div>
      <div>Categoria</div>
      <div>Valor</div>
      <div>Vencimento</div>
      <div>Quantidade</div>
      <div>Perecível</div>
      <div></div>
    </div>
    <div *ngFor="let product of products" class="grid grid-cols-7 p-2 bg-blue-100 rounded mb-1">
      <div class="p-1">{{ product.name }}</div>
      <div class="p-1">{{ product.category.name }}</div>
      <div class="p-1">{{ product.price }}</div>
      <div class="p-1">{{ product.expiration }}</div>
      <div class="p-1">{{ product.amount }}</div>
      <div class="p-1">{{ product.perishable ? 'sim' : 'não' }}</div>
      <div class="flex">
        <button type="button" class="w-fit" (click)="handleDeleteClick(product.id)">
          <mat-icon aria-hidden="false" fontIcon="delete"></mat-icon>
        </button>
        <div [routerLink]="['product/edit/' + product.id]" class="ml-2 cursor-pointer">
          <mat-icon aria-hidden="false" fontIcon="edit"></mat-icon>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = []

  constructor(private productService: ProductService) {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products.data);
  }

  handleDeleteClick(id: number | undefined) {
    if(id) {
      this.productService.deleteProduct(id).subscribe(result => {
        console.log(result);
        window.location.reload();
      });
    }
  }
}
