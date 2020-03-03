import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';

//shared
import { SharedModule } from './shared/shared.module';

//pipes
import { PipesModule } from './pipes/pipes.module';

//3-party modules
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { LightboxModule } from 'ngx-lightbox';
import { RatingModule } from 'ng-starrating';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    GameSearchComponent,
    GameDetailComponent,
    GameListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
    LightboxModule,
    SharedModule,
    PipesModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
