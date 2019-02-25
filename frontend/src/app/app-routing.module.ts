import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent} ,
  { path: 'film-details/:imdbId', component: FilmDetailsComponent },
  { path: 'film-search', component: FilmSearchComponent },
  { path: '*', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
