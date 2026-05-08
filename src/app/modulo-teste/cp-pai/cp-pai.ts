import { Component } from '@angular/core';
import { CpFilho } from '../cp-filho/cp-filho';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cp-pai',
  imports: [CpFilho, FormsModule],
  templateUrl: './cp-pai.html',
  styleUrl: './cp-pai.scss',
})
export class CpPai {

  public carro = {
    marca: '',
    ano: 0,
    cor:''
  }
}
