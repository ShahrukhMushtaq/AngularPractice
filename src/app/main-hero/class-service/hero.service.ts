import { Injectable } from '@angular/core';
import { Hero } from "./hero.model";
import { AngularFireDatabase , AngularFireList } from "angularfire2/database";

@Injectable()
export class HeroService {

  heroList : AngularFireList<any>;

  selectedHero : Hero = new Hero();

  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.heroList = this.firebase.list('heroes');
    return this.heroList;
  }

  insertHero(hero : Hero){
    this.heroList.push({
      name : hero.name,
      salary : hero.salary,
    });
  }

  updateHero(hero : Hero){
    this.heroList.update(hero.$key,
    {
      name : hero.name,
      salary : hero.salary,
    });
  }

  deleteHero($key : string){
    this.heroList.remove($key);
  }

}
