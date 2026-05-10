import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

// 1. Nossa "base de dados" 
  listaDeProdutos: Product[] = [
    { id: 1, name: 'Notebook', price: 3500, category: 'Eletrônicos', imageUrl: 'link-da-imagem-1.jpg' },
    { id: 2, name: 'Cadeira Gamer', price: 800, category: 'Móveis', imageUrl: 'link-da-imagem-2.jpg' },
    { id: 3, name: 'Mouse Sem Fio', price: 120, category: 'Acessórios', imageUrl: 'link-da-imagem-3.jpg' }
  ];

  // 2. Variável que guarda quem foi clicado (começa vazia, por isso o 'undefined')
  produtoEscolhido: Product | undefined;

  // 3. Função que roda quando clicamos em um <li>
  selecionarProduto(produtoClicado: Product) {
    this.produtoEscolhido = produtoClicado;
  }

}
