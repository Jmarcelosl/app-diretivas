import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: number;
  nome: string;
  quantidade: number;
}

@Injectable({
  providedIn: 'root' // Isso garante que o serviço é um Singleton (uma única instância para toda a aplicação)
})
export class ItemService {
  private itens: Item[] = [];
  
  // O BehaviorSubject guarda o estado atual e emite para quem se inscrever
  private itensSubject = new BehaviorSubject<Item[]>([]);
  
  // O Observable público que os componentes vão escutar (apenas leitura)
  itens$ = this.itensSubject.asObservable();
  
  private nextId = 1;

  constructor() {}

  adicionarItem(nome: string, quantidade: number): void {
    const novoItem: Item = { id: this.nextId++, nome, quantidade };
    this.itens.push(novoItem);
    this.atualizarEstado();
  }

  atualizarQuantidade(id: number, novaQuantidade: number): void {
    const item = this.itens.find(i => i.id === id);
    if (item) {
      item.quantidade = novaQuantidade;
      this.atualizarEstado();
    }
  }

  excluirItem(id: number): void {
    this.itens = this.itens.filter(i => i.id !== id);
    this.atualizarEstado();
  }

  private atualizarEstado(): void {
    // Emite uma nova cópia do array atualizado para todos os inscritos
    this.itensSubject.next([...this.itens]);
  }
}