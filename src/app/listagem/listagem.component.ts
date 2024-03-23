import { Component } from '@angular/core';
import { produtos } from '../../model/listaprodutos'
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [NgFor,RouterOutlet,ProdutoComponent,CommonModule,RouterLinkActive, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {

  produtos = produtos;
}
