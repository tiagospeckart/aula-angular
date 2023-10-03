import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductType } from 'src/app/enums/product-type.enum';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {
  public productForm: FormGroup;
  productTypes = Object.values(ProductType); // Assuming ProductType is correctly imported

  public show: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      code: ['', [Validators.required]],
      costPrice: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      salePrice: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      preparationTime: ['', [Validators.required]],
      productType: ['', []],
      comments: ['', []]
    });
  }

  sendForm() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // Implement your form submission logic
    } else {
      console.log('Form is invalid');
    }
  }

  formatMoney(event: any) {
    const value = event.target.value;
    event.target.value = parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // Apply formatting
  }
  
  unformatMoney(event: any) {
    event.target.value = event.target.value.replace(/,/g, ''); // Remove formatting
  }
}