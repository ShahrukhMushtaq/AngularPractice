import { Component, OnInit } from '@angular/core';

import { HeroService } from "./class-service/hero.service";

@Component({
  selector: 'main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.css'],
  providers : [HeroService],
})
export class MainHeroComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  ngOnInit() {
  }

}
