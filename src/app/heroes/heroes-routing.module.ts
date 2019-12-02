import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',       redirectTo: '/superheroes' },
  { path: 'heroes/:id',   redirectTo: '/superheroes/:id' },
  { path: 'superheroes',  component: HeroListComponent },
  { path: 'superheroes/:id', component: HeroDetailComponent }
];

@NgModule ({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class HeroesRoutingModule {}