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
    error: any;
    addingHero = true;

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;

        if (savedHero) { 
            this.getHeroes(); 
        }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                
                if (this.selectedHero === hero) { 
                    this.selectedHero = null; 
                }
            })
            .catch(error => this.error = error);
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
