import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpAgrupador } from './cp-agrupador/cp-agrupador';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CpAgrupador
  ],
  exports:[
    CpAgrupador
  ]
})
export class MdServiceModule { }
