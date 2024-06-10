import { ProductService } from './../../../service/product.service';

import { Product } from '../../../../interface/Product';

import { RouterLink, RouterOutlet } from '@angular/router';

import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products: Product[] = [];
  allproducts: Product[] = [];
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.allproducts = products;
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  handleDelete(id: number) {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter((product) => product.id !== id);
          alert('Xóa thành công');
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
