import { Routes } from '@angular/router';
import { NgFor } from './ng-for/ng-for';
import { NgIf } from './ng-if/ng-if';
import { NgSwitch } from './ng-switch/ng-switch';
import { Pipes } from './pipes/pipes';
import { NgClass } from './ng-class/ng-class';
import { NgModel } from './ng-model/ng-model';
import { NgStyle } from './ng-style/ng-style';
import { Microondas } from './microondas/microondas';
import { CpPai } from './modulo-teste/cp-pai/cp-pai';
import { CpPai2 } from './modulo-teste-2/cp-pai-2/cp-pai-2';
import { CpAgrupador } from './md-service/cp-agrupador/cp-agrupador';

export const routes: Routes = [
    {path:"ng-class", component:NgClass},
    {path:"ng-for", component:NgFor},
    {path:"ng-if", component:NgIf},
    {path:"ng-model", component:NgModel},
    {path:"ng-style", component:NgStyle},
    {path:"ng-switch", component:NgSwitch},
    {path:"pipes",component:Pipes},
    {path:"microondas",component:Microondas},
    {path:"ex_cpPai",component:CpPai},
    {path:"ex_cpPai2",component:CpPai2},
    {path:"cp_agrupador",component:CpAgrupador}

];
