import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //this line defines a component property called heroes to expose the HEROES array for binding
  //heroes = HEROES; no longer needed bc we are using a heroService now
  heroes: Hero[]; 

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  //   superPower: 'High Winds',
  //   damagePoints: 250
  // }  no longer need to hard code list of heroes

  //selectedHero: Hero;  //in slide deck for student-webpage this had a ? bc it won't exist until a hero is clicked
  
  constructor(private heroService: HeroService) { }
  //took this 2nd arg from the constructor: , private messageService: MessageService
  
  ngOnInit() {
    this.getHeroes();
   }   //this line said void originally. RMV it for box to work. in slide deck fo rstud-webpg void was there
  
  //  no longer needed
  // onSelect(hero:Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    //this.heroes = this.heroService.getHeroes(); //this will not work in a real appbc getHeroes can't return immediately.This line is asynchronous
  }

}
