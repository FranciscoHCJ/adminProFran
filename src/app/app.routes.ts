import {  RouterModule, Routes } from '@angular/router';

// Pagina Principal
import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Rutas Hijas
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

// Pagina de error
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {    // Esto es temporal
        path: '', // Ruta con espacio vacio o sin ruta va a redireccionar a PagesComponent
        component: PagesComponent, // El cual contiene rutas hijas
        children: [ // Que son las siguientes:
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // Si esta vacio va a redireccionar al dashboard
        ]
    },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });

