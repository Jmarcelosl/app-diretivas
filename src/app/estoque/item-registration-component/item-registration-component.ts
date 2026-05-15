import { Component } from '@angular/core';
import { ItemService } from '../item-service';

@Component({
  selector: 'app-item-registration',
  standalone: false,
  templateUrl: './item-registration-component.html',
  styleUrls: ['./item-registration-component.scss']
})

export class ItemRegistrationComponent {
  nomeItem: string = '';
  quantidadeInicial: number = 0;

  constructor(private itemService: ItemService) {}

  cadastrar(): void {
    if (this.nomeItem.trim() && this.quantidadeInicial >= 0) {
      this.itemService.adicionarItem(this.nomeItem, this.quantidadeInicial);
      
      this.nomeItem = '';
      this.quantidadeInicial = 0;
    }
  }
}