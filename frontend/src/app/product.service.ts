import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product, ProductPost } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private defaultUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<{data: Product[]}> {
    return this.http.get<{data: Product[]}>(`${this.defaultUrl}/api/product`);
  }

  getAllCategories(): Observable<{data: Category[]}> {
    return this.http.get<{data: Category[]}>(`${this.defaultUrl}/api/category`);
  }

  postNewProduct(product: ProductPost) {
    return this.http.post(`${this.defaultUrl}/api/product`, product);
  }

  getOneProduct(id: number): Observable<{data: Product}> {
    return this.http.get<{data: Product}>(`${this.defaultUrl}/api/product/${id}`);
  }

  editOneProduct(product: ProductPost, id: number) {
    return this.http.put(`${this.defaultUrl}/api/product/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.defaultUrl}/api/product/${id}`);
  }
}
