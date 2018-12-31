import { NgModule } from '@angular/core';

// Modulo
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Rutas Hijas
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    // Declaración de los componentes o paginas
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ], // Se exportan los componentes que van a ser utilizados por app.module.ts
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ], // Importamos los componentes del modulo shared.modulo.ts
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule {}