import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //this line defines a component property called heroes to expose the HEROES array for binding
  heroes = HEROES; 

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  //   superPower: 'High Winds',
  //   damagePoints: 250
  // }  no longer need to hard code list of heroes

  selectedHero: Hero;  //in slide deck for student-webpage this had a ? bc it won't exist until a hero is clicked
  
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() { }   //this line said void originally. RMV it for box to work. in slide deck fo rstud-webpg void was there

}
