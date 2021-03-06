"use strict";
// dependencies
var router_1 = require('@angular/router');
// components
var dashboard_component_1 = require('./../dashboard/dashboard.component');
var heroes_component_1 = require('./../heroes/heroes.component');
var hero_detail_component_1 = require('./../hero-detail/hero-detail.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map