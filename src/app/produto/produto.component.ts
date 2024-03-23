import { Component } from '@angular/core';
import { Produto } from '../../model/produto';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  model = new Produto(18, 'Dr. IQx', 'Chuck Overstreet', 10, true);

  submitted = false;

  onSubmit() { this.submitted = true; }

}
