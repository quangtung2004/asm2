import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  productId!: string | undefined;

  createProductForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      this.productService.getProductDetail(param['id']).subscribe({
        next: (data) => {
          this.createProductForm.patchValue(data);
        },
        error: (error) => {
          // show thong bao error
          console.error(error);
        },
      });
    });
  }
  constructor(private router: Router) {}
  handleSubmit() {
    console.log(this.createProductForm);
    if (!this.productId) return;
    this.productService
      .updateProduct(this.productId, this.createProductForm.value)
      .subscribe({
        next: () => {
          alert('Update thành công');
          this.router.navigate(['/products/list']);
        },
        error: (error) => {
          console.log(error.messgage);
        },
      });
  }
}
