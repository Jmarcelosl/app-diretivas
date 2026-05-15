import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../item-service';

@Component({
  selector: 'app-item-list',
  standalone: false, // <-- ADICIONE ESTA LINHA
  templateUrl: './item-list-component.html',
  styleUrls: ['./item-list-component.scss']
})

export class ItemListComponent implements OnInit {
  itens: Item[] = [];
  
  itemEditandoId: number | null = null;
  quantidadeTemporaria: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.itens$.subscribe(listaAtualizada => {
      this.itens = listaAtualizada;
    });
  }

  habilitarEdicao(item: Item): void {
    this.itemEditandoId = item.id;
    this.quantidadeTemporaria = item.quantidade;
  }

  salvarQuantidade(id: number): void {
    if (this.quantidadeTemporaria >= 0) {
      this.itemService.atualizarQuantidade(id, this.quantidadeTemporaria);
    }
    this.itemEditandoId = null;
  }

  excluir(id: number): void {
    this.itemService.excluirItem(id);
  }
}