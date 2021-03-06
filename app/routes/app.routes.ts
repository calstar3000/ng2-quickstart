
// dependencies
import { provideRouter, RouterConfig }  from '@angular/router';

// components
import { DashboardComponent } from './../dashboard/dashboard.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
