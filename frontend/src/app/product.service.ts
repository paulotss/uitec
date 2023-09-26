import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private defaultUrl = 'http://localhost:3001/api/product';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<{data: Product[]}> {
    return this.http.get<{data: Product[]}>(this.defaultUrl);
  }
}
