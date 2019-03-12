import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentModule } from '../components/components.module';

// Paginas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Rutas Hijas
import { PAGES_ROUTES } from './pages.routes';

// Temporal
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    // Declaración de los componentes o paginas
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        AccountSettingsComponent,
    ], // Se exportan los componentes que van a ser utilizados por app.module.ts
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        ComponentModule
    ], // Importamos los componentes del modulo shared.modulo.ts
    imports: [
        SharedModule,
        PAGES_ROUTES,
        ComponentModule,
        BrowserModule,
    ]
})
export class PagesModule {}