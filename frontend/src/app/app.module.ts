import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BilionDollarsPipe } from './pipes/bilion-dollars.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmListItemComponent } from './shared/components/film-list-item/film-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    BilionDollarsPipe,
    HomeComponent,
    FilmSearchComponent,
    FilmDetailsComponent,
    FilmListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

