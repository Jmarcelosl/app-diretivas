import { Component } from '@angular/core';
import { CpFilho2 } from '../cp-filho-2/cp-filho-2';

@Component({
  selector: 'app-cp-pai-2',
  imports: [CpFilho2],
  templateUrl: './cp-pai-2.html',
  styleUrl: './cp-pai-2.scss',
})
export class CpPai2 {

  public numeroSorteado: number = 0;

  public recebeNumero(nr: number){
    this.numeroSorteado = nr;
  }

}
