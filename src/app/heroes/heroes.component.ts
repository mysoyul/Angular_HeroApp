import { Component, OnInit } from '@angular/core';

import { Hero } from '../common/hero';
import { HeroService } from '../common/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero: Hero = {id:1, name:'WindStorm'};
  heroes: Hero[] = [];
  selectedHero?: Hero;

  today: number = Date.now();

  constructor(private heroService: HeroService) {
    console.log('HeroesComponent Constructor called..');
    console.log('HeroService ' + heroService);
  }

  ngOnInit(): void {
    console.log('HeroesComponent ngOnInit() called..');
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(hero_list => this.heroes = hero_list);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
