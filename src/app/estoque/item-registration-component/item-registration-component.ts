import { Component } from '@angular/core';
import { ItemService } from '../item-service';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration-component.html',
  styleUrls: ['./item-registration-component.scss']
})
export class ItemRegistrationComponent {
  nomeItem: string = '';
  quantidadeInicial: number = 0;

  // Injetando o serviço
  constructor(private itemService: ItemService) {}

  cadastrar(): void {
    if (this.nomeItem.trim() && this.quantidadeInicial >= 0) {
      // Envia os dados DIRETAMENTE para o serviço
      this.itemService.adicionarItem(this.nomeItem, this.quantidadeInicial);
      
      this.nomeItem = '';
      this.quantidadeInicial = 0;
    }
  }
}