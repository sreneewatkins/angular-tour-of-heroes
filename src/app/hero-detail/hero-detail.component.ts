import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router'; //get the route that created the hero to display
import { Location } from '@angular/common'; //extract the id from the route
import { HeroService } from '../hero.service'; //acquire the hero with that id from the server via the HeroService

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
}) 

export class HeroDetailComponent implements OnInit {
  //@Input() hero: Hero; //how do you know to put this here? directions were unclear
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
