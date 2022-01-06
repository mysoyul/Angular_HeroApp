import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {id: 1, name: 'Windstorm'};
  today: number = Date.now();

  constructor() {
    console.log('HeroesComponent Constructor called..');
  }

  ngOnInit(): void {
    console.log('HeroesComponent ngOnInit() called..');
  }

}
