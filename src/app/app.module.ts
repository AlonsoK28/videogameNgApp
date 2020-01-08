import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imports needed
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoNuevoComponent } from './producto-nuevo/producto-nuevo.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosCardComponent } from './template/productos-card/productos-card.component';
import { ProductoBusquedaComponent } from './producto-busqueda/producto-busqueda.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameCardComponent } from './shared/game-card/game-card.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameLoaderComponent } from './game-loader/game-loader.component';

//pipes
import { WordToSlugPipe } from './pipes/word-to-slug.pipe';
import { SlugToWordPipe } from './pipes/slug-to-word.pipe';
import { HtmlToTextPipe } from './pipes/html-to-text.pipe'; // <-- import it

//vendor
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {  faCircleNotch, 
          faPoll, 
          faExclamationTriangle, 
          faAsterisk, 
          faPlusCircle, 
          faSearch, 
          faTimes, 
          faCheckCircle, 
          faArrowCircleLeft, 
          faInfoCircle, 
          faBackspace, 
          faFont, 
          faPaperclip,
          faShoppingBasket,
          faStarHalfAlt,
          faExternalLinkAlt,
          faCalendarAlt,
          faGrinTongueWink,
          faImage,
          faUser, 
          faGamepad, 
          faHeart, 
          faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  faAngular,
          faYoutube,
          faXbox,
          faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    ProductoNuevoComponent,
    LoaderComponent,
    FooterComponent,
    ProductosCardComponent,
    ProductoBusquedaComponent,
    WordToSlugPipe,
    SlugToWordPipe,
    GameSearchComponent,
    GameCardComponent,
    GameDetailComponent,
    GameLoaderComponent,
    HtmlToTextPipe,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons( faAngular, 
      faCircleNotch, 
      faPoll, 
      faExclamationTriangle, 
      faAsterisk, 
      faPlusCircle, 
      faSearch, 
      faTimes, 
      faArrowCircleLeft, 
      faInfoCircle, 
      faBackspace, 
      faCheckCircle, 
      faFont,
      faPaperclip,
      faShoppingBasket,
      faStarHalfAlt,
      faExternalLinkAlt,
      faCalendarAlt,
      faGrinTongueWink,
      faYoutube,
      faImage,
      faUser,
      faGamepad,
      faHeart,
      faShoppingCart,
      faXbox,
      faPlaystation );  
  }
}
