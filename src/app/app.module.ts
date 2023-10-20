import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
