import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero: Hero = {id:1, name:'WindStorm'};
  heroes = HEROES;
  selectedHero?: Hero;

  today: number = Date.now();

  constructor() {
    console.log('HeroesComponent Constructor called..');
  }

  ngOnInit(): void {
    console.log('HeroesComponent ngOnInit() called..');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
