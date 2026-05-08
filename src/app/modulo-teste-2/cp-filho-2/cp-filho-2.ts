import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cp-filho-2',
  imports: [],
  templateUrl: './cp-filho-2.html',
  styleUrl: './cp-filho-2.scss',
})
export class CpFilho2 {

  @Output() public emiteEventoPai = new EventEmitter();

  public sorteiaNumero(){
    let numero = Math.floor(Math.random() * 100 + 1);
    this.emiteEventoPai.emit(numero);
  }



}
