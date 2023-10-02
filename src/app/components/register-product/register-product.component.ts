import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit{
  // Declarar o formulário
  public productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit(): void {
    // Chamar a função para executar
    this.createForm();
  }

  // Começa o formulário dentro do TypeScript
  // Criar uma função que cria o formulário
  private createForm() {
    // 1 - Chamar o atributo do formulário
    // 2 - Construir os atributos do formulário
    this.productForm = this.formBuilder.group({
      // inputs(atributos) do formulário
      title: '',
      author: '',
      year: '',
      price: 0
    })

    // 3 - Criar no HTML o formulário
  }
}
