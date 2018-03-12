import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { MainHeroComponent } from './main-hero/main-hero.component';
import { HeroComponent } from './main-hero/hero/hero.component';
import { HeroListComponent } from './main-hero/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeroComponent,
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
