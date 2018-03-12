import { Component, OnInit } from '@angular/core';
import { HeroService } from "../class-service/hero.service";
import { Hero } from "../class-service/hero.model";
import { element } from 'protractor';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroList : Hero[];

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    var x = this.heroService.getData();
    x.snapshotChanges().subscribe(item => {
      this.heroList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.heroList.push(y as Hero);
      });
    });

  }

  onUpdate(her : Hero){
    this.heroService.selectedHero = Object.assign({},her);
  }

  onDelete(key : string){
    this.heroService.deleteHero(key);
  }

}
