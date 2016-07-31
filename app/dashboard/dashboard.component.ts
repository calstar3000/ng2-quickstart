
// dependencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// classes
import { Hero } from './../hero/hero';

// services
import { HeroService } from './../hero/hero.service';

// components
import { HeroSearchComponent } from './../search/hero-search.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    directives: [HeroSearchComponent]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}

