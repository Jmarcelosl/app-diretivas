import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpPai } from './cp-pai/cp-pai';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CpPai
  ],
  exports:[
    CpPai
  ]
})
export class ModuloTesteModule { }
