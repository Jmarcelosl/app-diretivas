import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.html',
  styleUrls: ['./microondas.scss']
})
export class Microondas implements OnDestroy {
  constructor(private cdr: ChangeDetectorRef){}
  
  inputDigits: string = '';
  displayTime: string = '00:00';
  totalSeconds: number = 0;
  timer: any;
  isRunning: boolean = false;

  // Lida com a digitação dos números (máx 4 dígitos)
  pressKey(key: string) {
    if (this.isRunning) return; // Ignora se o microondas estiver ligado
    
    // Evita zeros à esquerda antes de ter números reais
    if (this.inputDigits === '' && key === '0') return;

    if (this.inputDigits.length < 4) {
      this.inputDigits += key;
      this.updateDisplayFromInput();
    }
  }

  // Formata o que foi digitado para o formato MM:SS
  updateDisplayFromInput() {
    const padded = this.inputDigits.padStart(4, '0');
    this.displayTime = `${padded.substring(0, 2)}:${padded.substring(2, 4)}`;
    
    const mins = parseInt(padded.substring(0, 2), 10);
    const secs = parseInt(padded.substring(2, 4), 10);
    this.totalSeconds = (mins * 60) + secs;
  }

  // Atualiza a tela baseado nos segundos restantes (durante o countdown)
  updateDisplayFromSeconds() {
    const mins = Math.floor(this.totalSeconds / 60);
    const secs = this.totalSeconds % 60;
    const minsStr = mins.toString().padStart(2, '0');
    const secsStr = secs.toString().padStart(2, '0');
    this.displayTime = `${minsStr}:${secsStr}`;
    this.cdr.detectChanges();
  }

  start() {
    if (this.isRunning) return;

    // Função "+30 seg" padrão de microondas se estiver tudo zerado
    if (this.totalSeconds === 0 && this.inputDigits === '') {
      this.totalSeconds = 30;
      this.updateDisplayFromSeconds();
    }

    if (this.totalSeconds > 0) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.totalSeconds--;
        this.updateDisplayFromSeconds();
        
        if (this.totalSeconds <= 0) {
          this.finish();
        }
      }, 1000);
    }
  }

  stop() {
    if (this.isRunning) {
      // 1º Clique: Pausa
      clearInterval(this.timer);
      this.isRunning = false;
      this.inputDigits = ''; // Reseta input para não bugar ao voltar a digitar
    } else {
      // 2º Clique (ou com ele já pausado): Cancela / Zera tudo
      this.inputDigits = '';
      this.totalSeconds = 0;
      this.displayTime = '00:00';
    }
  }

  finish() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.inputDigits = '';
    this.displayTime = 'FIM';
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}