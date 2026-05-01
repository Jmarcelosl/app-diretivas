import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.scss',
})
export class NgFor {
  contador: number = 1;
  nomeSelecionado: string = "";
  idadeSelecionado: number = 0;

  public listaPessoas: any = [];

  public addPessoa() {
    this.listaPessoas.push(
      {
        nome: 'Pessoa ' + this.contador,
        idade: this.contador + 30
      });
    this.contador++;
    this.nomeSelecionado = '';
  }

  public removerPessoa(pessoa: any) {
    this.listaPessoas = this.listaPessoas.filter((p: any) => p !== pessoa);
    this.nomeSelecionado = '';
  }
  public clickPessoa(p: any) {
    this.nomeSelecionado = p.nome;
    this.idadeSelecionado = p.idade;
  }

}