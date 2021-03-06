
// dependencies
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// classes
import { Hero } from './../hero/hero';

// services
import { HeroService } from './../hero/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail/hero-detail.component.html',
    styleUrls: ['app/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here
    sub: any;
    newHeroId;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    ngOnInit() {
        this.heroService
            .getHeroes()
            .then(heroes => this.newHeroId = heroes[heroes.length - 1].id + 1);

        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.heroService
                    .getHero(id)
                    .then(hero => { 
                        this.hero = hero;
                        this.newHeroId = hero.id;
                    });
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);

        if (this.navigated) { 
            window.history.back();
        }
    }

}
