import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  private produtos: Produto[] = [{
    'id' : 1,
    'nome': 'Cerveja Lokal 350ml',
    'descricao':'cerveja boa!',
    'valor':2.90,
    'disponivel': true
  },
  {
    'id' : 2,
    'nome': 'Coca Cola 2 litros',
    'descricao':'Refrigerante 2 litros',
    'valor': 10.90,
    'disponivel': false
        
  },
  {
    'id' : 3,
    'nome': 'Sonho de valsa',
    'descricao':'chocolate',
    'valor': 4.5,
    'disponivel': true
        
  },
  {
    'id' : 4,
    'nome': 'Guaraná Jesus 2 litros',
    'descricao':'Refrigerante 2 litros',
    'valor': 6,
    'disponivel': false
        
  }];

  getProdutos(ordernarChave?: string, ascendente?: boolean) : Produto[] {
    if (ordernarChave == "id")
      return this.produtos.sort((a, b) => (a.id - b.id) * (ascendente ?? true ? 1 : -1));
    else if (ordernarChave == "valor")
      return this.produtos.sort((a, b) => (a.valor - b.valor) * (ascendente ?? true ? 1 : -1));
    else if (ordernarChave == "nome")
      return this.produtos.sort((a, b) => a.nome.localeCompare(b.nome) * (ascendente ?? true ? 1 : -1));
    else if (ordernarChave == "descricao")
      return this.produtos.sort((a, b) => a.descricao.localeCompare(b.descricao) * (ascendente ?? true ? 1 : -1));

    return this.produtos;
  }

  getProduto(id: number): Produto | null {
    const produtoInterno = this.getProdutoInterno(id);

    if (produtoInterno !== null) return {...produtoInterno};

    return null;
  }

  private getProdutoInterno(id: number): Produto | null {
    for (const produto of this.produtos) {
      if (id === produto.id) {
        return produto;
      }
    }

    return null;
  }

  updateProduto(produto: Produto): void {
    const produtoInterno = this.getProdutoInterno(produto.id);

    if (produtoInterno !== null) {
      produtoInterno.nome = produto.nome;
      produtoInterno.descricao = produto.descricao;
      produtoInterno.valor = produto.valor;
      produtoInterno.disponivel = produto.disponivel;
    }
  }

  createProduto(produto: Produto): void {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto);
  }
}
