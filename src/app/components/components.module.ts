import { NgModule, Component } from '@angular/core';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        FormsModule,
        ChartsModule
    ]
})
export class ComponentModule {}