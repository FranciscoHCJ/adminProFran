import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    {    // Esto es temporal
        path: '', // Ruta con espacio vacio o sin ruta va a redireccionar a PagesComponent
        component: PagesComponent, // El cual contiene rutas hijas
        children: [ // Que son las siguientes:
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: 'account-settings', component: AccountSettingsComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // Si esta vacio va a redireccionar al dashboard
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );