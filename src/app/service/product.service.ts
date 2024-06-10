import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/products';
  constructor() {}

  getAllProducts() {
    return this.http.get<any>(this.apiUrl);
  }
  getProductDetail(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  createProduct(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  updateProduct(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
