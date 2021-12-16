import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ArtistComponent} from './components/artist/artist.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {SharedComponent} from './components/shared/shared.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {HttpClientModule} from '@angular/common/http';
import { NoImagePipePipe } from './pipes/no-image-pipe.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    SharedComponent,
    NavbarComponent,
    NoImagePipePipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
