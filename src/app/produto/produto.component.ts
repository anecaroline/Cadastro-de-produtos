import { Component } from '@angular/core';
import { Produto } from '../../model/produto';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  model: Produto = null!;

  constructor(private activatedRoute: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    const produtoId = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!);

    if (produtoId == -1) {
      this.model = new Produto(-1, '', '', 0, true);
    } else {
      this.model = this.produtoService.getProduto(produtoId)!;
    }
  }

  onSubmit() { 
    if (this.model.id == -1) {
      this.produtoService.createProduto(this.model);
    } else {
      this.produtoService.updateProduto(this.model);
    }
  }
}


