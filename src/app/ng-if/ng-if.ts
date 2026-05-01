import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.scss',
})
export class NgIf {

   containerAmarelo: boolean = false;
   containerVermelho: boolean = false;
   
   public clickAmarelo() {
    this.containerAmarelo = !this.containerAmarelo;
   }

   public clickVermelho() {
    this.containerVermelho = !this.containerVermelho;
   }
}
