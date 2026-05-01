import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-switch.html',
  styleUrl: './ng-switch.scss',
})
export class NgSwitch {
  public valor: number = 1;
}