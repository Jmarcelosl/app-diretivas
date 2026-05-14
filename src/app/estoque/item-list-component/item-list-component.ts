import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../item-service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list-component.html',
  styleUrls: ['./item-list-component.scss']
})
export class ItemListComponent implements OnInit {
  itens: Item[] = [];
  
  itemEditandoId: number | null = null;
  quantidadeTemporaria: number = 0;

  // Injetando o mesmo serviço
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // Fica escutando o serviço. Se o componente de cadastro adicionar algo, 
    // esta lista é atualizada automaticamente!
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
      // Pede para o serviço atualizar
      this.itemService.atualizarQuantidade(id, this.quantidadeTemporaria);
    }
    this.itemEditandoId = null;
  }

  excluir(id: number): void {
    // Pede para o serviço excluir
    this.itemService.excluirItem(id);
  }
}