import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { ItemRegistrationComponent } from './item-registration-component/item-registration-component';
import { ItemListComponent } from './item-list-component/item-list-component';
import { EstoqueComponent } from './estoque-component/estoque-component';

@NgModule({
  declarations: [
    EstoqueComponent,
    ItemRegistrationComponent,
    ItemListComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EstoqueComponent
  ]
})
export class EstoqueModule { }