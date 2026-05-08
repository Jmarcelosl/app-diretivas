import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cp-filho',
  imports: [],
  templateUrl: './cp-filho.html',
  styleUrl: './cp-filho.scss',
})
export class CpFilho {

  @Input() public carroFilho:any;

}
