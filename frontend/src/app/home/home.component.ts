import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Home Page</h1>
    <div class="grid grid-cols-6 text-sm p-1">
      <div>Nome</div>
      <div>Categoria</div>
      <div>Valor</div>
      <div>Vencimento</div>
      <div>Quantidade</div>
      <div>Perecível</div>
    </div>
    <div *ngFor="let product of products" class="grid grid-cols-6 p-1">
      <div>{{ product.name }}</div>
      <div>{{ product.category.name }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.expiration }}</div>
      <div>{{ product.amount }}</div>
      <div>{{ product.perishable }}</div>
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
}
