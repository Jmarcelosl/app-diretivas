import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.scss',
})
export class NgStyle {

  public largura : number = 100;
  public larguraStr : string = "100px"

  aumenta(){
    this.largura += 50;
    this.larguraStr = this.largura+"px";
  }

  diminui(){
    this.largura -= 50;
    this.larguraStr = this.largura+"px";
  }
}
