// dependencies
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

// classes
import { Hero } from './hero';

// components
import { HeroDetailComponent } from './hero-detail.component';

// services
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: []
})

export class HeroesComponent implements OnInit {
    title = '';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit() {
      this.getHeroes();
    }

    getHeroes() {
       this.heroService
           .getHeroes()
           // .getHeroesSlowly()
           .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
