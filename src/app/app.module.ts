import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameCardComponent } from './shared/game-card/game-card.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameLoaderComponent } from './game-loader/game-loader.component';
import { GameListComponent } from './game-list/game-list.component';

//pipes
import { WordToSlugPipe } from './pipes/word-to-slug.pipe';
import { SlugToWordPipe } from './pipes/slug-to-word.pipe';
import { HtmlToTextPipe } from './pipes/html-to-text.pipe';
import { IconGeneratorPipe } from './pipes/icon-generator.pipe';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { RatingColorPipe } from './pipes/rating-color.pipe';

//vendor
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { RatingModule } from 'ng-starrating';
import { LightboxModule } from 'ngx-lightbox';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {  faCircleNotch, 
          faPoll,faExclamationTriangle,faAsterisk,faPlusCircle,faSearch, 
          faTimes, faCheckCircle, faArrowCircleLeft, faArrowAltCircleLeft,faInfoCircle, faBackspace, 
          faFont, faPaperclip,faShoppingBasket,faStarHalfAlt,faExternalLinkAlt,faCalendarAlt,
          faGrinTongueWink,faImage,faUser, faGamepad, faHeart, faShoppingCart,faDice,faLaptop,
          faChevronCircleUp, faTrophy, faDatabase
        } from '@fortawesome/free-solid-svg-icons';
import {  faAngular,faYoutube,faXbox,faPlaystation,faJsSquare,faNodeJs,faCss3Alt,faSteam, faHtml5,
          faApple,faAppStoreIos,faAndroid,faGooglePlay,faChrome, faBootstrap, faFontAwesome
        } from '@fortawesome/free-brands-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    FooterComponent,
    WordToSlugPipe,
    SlugToWordPipe,
    GameSearchComponent,
    GameCardComponent,
    GameDetailComponent,
    GameLoaderComponent,
    HtmlToTextPipe,
    DomSanitizerPipe,
    IconGeneratorPipe,
    RatingColorPipe,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
    RatingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons( faAngular, 
      faCircleNotch, faPoll, faExclamationTriangle, faAsterisk, faPlusCircle, faSearch, faTimes, 
      faArrowCircleLeft, faInfoCircle, faBackspace, faCheckCircle, faFont,
      faPaperclip,faShoppingBasket,faStarHalfAlt,faExternalLinkAlt,faCalendarAlt,faGrinTongueWink,
      faYoutube,faImage,faUser,faGamepad,faHeart,faShoppingCart,faXbox,faPlaystation,faJsSquare,
      faNodeJs,faCss3Alt,faArrowAltCircleLeft,faSteam,faDice,faHtml5,faLaptop,faApple,faAppStoreIos,
      faAndroid, faGooglePlay, faChrome, faBootstrap, faChevronCircleUp, faTrophy, faFontAwesome, faDatabase );  
  }
}
