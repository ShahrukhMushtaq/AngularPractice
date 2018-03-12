import { Component, OnInit } from '@angular/core';

import { HeroService } from "../class-service/hero.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    
  }

  onSubmit(heroForm : NgForm){
    if(heroForm.value.$key == null)
    this.heroService.insertHero(heroForm.value);
    else
    this.heroService.updateHero(heroForm.value);
  }

}
