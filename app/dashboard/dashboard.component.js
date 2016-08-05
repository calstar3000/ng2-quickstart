"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// dependencies
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// services
var hero_service_1 = require('./../hero/hero.service');
// components
var hero_search_component_1 = require('./../search/hero-search.component');
var DashboardComponent = (function () {
    function DashboardComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes = [];
        this.heroRows = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) {
            _this.heroes = heroes;
            _this.splitHeroesToRows();
        });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.splitHeroesToRows = function () {
        var heroIndex = 0;
        while (heroIndex < this.heroes.length) {
            var row = [];
            for (var i = 0; i < 4 && heroIndex < this.heroes.length; i++) {
                row.push(this.heroes[heroIndex]);
                heroIndex++;
            }
            this.heroRows.push(row);
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            directives: [hero_search_component_1.HeroSearchComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map