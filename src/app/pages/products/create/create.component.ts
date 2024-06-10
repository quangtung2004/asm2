
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  productService = inject(ProductService);

  createProductForm: FormGroup = new FormGroup({
    //Form controll giá trị ban đầu, validators
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    category: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router) {}

  handleSubmit() {
    //call api create producl
    console.log(this.createProductForm);
    this.productService.createProduct(this.createProductForm.value).subscribe({
      next: () => {
        alert("Thêm thành công");
        this.router.navigate(['/products/list']);
      },
      error: (error) => {
        console.log(error.messgage);
      },
    });
  }
}
