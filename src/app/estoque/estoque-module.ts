import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { ItemRegistrationComponent } from './item-registration-component/item-registration-component';
import { ItemListComponent } from './item-list-component/item-list-component';

@NgModule({
  declarations: [
    ItemRegistrationComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ItemRegistrationComponent,
    ItemListComponent
  ]
})
export class EstoqueModule { }