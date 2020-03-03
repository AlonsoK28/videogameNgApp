import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//components
import { GameCardComponent } from './game-card/game-card.component'
import { BackToTopComponent } from './back-to-top/back-to-top.component'
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component'
import { GameLoaderComponent } from './game-loader/game-loader.component'

//pipes
import { PipesModule } from '../pipes/pipes.module';

// 3-party modules
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { RatingModule } from 'ng-starrating';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    GameCardComponent,
    BackToTopComponent,
    FooterComponent,
    GameLoaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
    RatingModule,
    PipesModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    GameCardComponent,
    BackToTopComponent,
    FooterComponent,
    NavbarComponent,
    GameLoaderComponent
  ]
})
export class SharedModule { }
