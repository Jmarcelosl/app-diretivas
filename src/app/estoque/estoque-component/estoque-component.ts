import { Component } from '@angular/core';
import { ItemRegistrationComponent } from "../item-registration-component/item-registration-component";
import { ItemListComponent } from "../item-list-component/item-list-component";

@Component({
  selector: 'app-estoque',
  standalone: true, // Se estiver a usar standalone
  imports: [ItemRegistrationComponent, ItemListComponent], // Adicione isto
  templateUrl: './estoque-component.html',
  styleUrls: ['./estoque-component.scss']
})
export class EstoqueComponent { }