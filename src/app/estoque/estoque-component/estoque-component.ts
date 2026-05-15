import { Component } from '@angular/core';
import { EstoqueModule } from '../estoque-module';

@Component({
  selector: 'app-estoque',
  standalone: true, // Mantemos true para o Router funcionar
  imports: [EstoqueModule], // Importamos o módulo que construímos
  templateUrl: './estoque-component.html',
  styleUrls: ['./estoque-component.scss']
})
export class EstoqueComponent { }