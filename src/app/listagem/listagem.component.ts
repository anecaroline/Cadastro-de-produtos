import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [NgFor,RouterOutlet,ProdutoComponent,CommonModule,RouterLinkActive, RouterLink, ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {
  produtos: Produto[];

  constructor (produtoService: ProdutoService)
  {
    this.produtos = produtoService.getProdutos("valor", false);
  }
}
