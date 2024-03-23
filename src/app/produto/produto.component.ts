import { Component } from '@angular/core';
import { Produto } from '../../model/produto';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, } from '@angular/common';
import {produtos} from '../../model/listaprodutos';
import { ActivatedRoute } from '@angular/router';

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
  // produtos = produtos;

  // ngOnInit(): void{

  //   for (const produto of produtos){
      
  //     console.log(produto);
  //   }

   
  // }

  constructor(private activatedRoute : ActivatedRoute) { }
 
  ngOnInit(): void {
  const produtoId = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!) ;
  
  console.log(produtoId);
  for (const produto of produtos){
    if (produtoId === produto.id){
      this.model = produto;
      break;
    }
    console.log(produto.id);
  }
  
 
}

}


