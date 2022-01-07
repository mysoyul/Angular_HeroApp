import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';

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
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
