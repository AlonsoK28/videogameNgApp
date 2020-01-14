import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { httpError } from '../models/httpError';
import { GameRestApiService } from '../services/game-rest-api.service';
import { Lightbox } from 'ngx-lightbox';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  Game;
  slug: string = "";
  defaultImage: string = "assets/image/placeholder.png";
  noImage: string = "assets/image/no-image.png";
  noImageJumbotron: string = "assets/image/no-image-jumbotron.png";
  loader: boolean = false;
  notFound: boolean = false;
  httpErrorCode: number;
  httpErrorMessage: string;
  jumbotronBackgroudImage:object;
  private _albums = [];

  constructor(private gameRestApi: GameRestApiService,
              private route: ActivatedRoute,
              private _lightbox: Lightbox,
              private _location: Location ) { 
    this.route.params.subscribe(params => {
      if (params.slug) {
        this.slug = params.slug;
      }
    });

  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {
    this.loader = true;
    this.notFound = false;
    this.gameDetail();
  }

  /**
   * Get detail  of a Game.
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  * @http https://api.rawg.io/docs/#operation/games_read
  * @return Game
  */
  gameDetail(){
    return this.gameRestApi.getGameDetail(this.slug).subscribe(
      //next  
      data => {
        this.Game = data;
        this.loader = false;
        this.loadjumbotronBackgroudImage();
        this.loadLigthboxImages();
      },
      //error
      (err: httpError) => {
        this.loader = false;
        this.httpErrorCode = err.httpStatusCode;
        this.httpErrorMessage = err.httpErrorMessage;
        this.notFound = true;
      },
      //complete
      ()=>{
        console.info("Data correctly recieved by Observer ✔️");
      }
    );
  }

  /**
  * Validate if is present, if not, a fallback image is setted
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  loadjumbotronBackgroudImage(){
    if (this.Game.background_image) {
      this.jumbotronBackgroudImage = {
        "background-image": `url('${this.Game.background_image}')`
      };
    } else {
      this.jumbotronBackgroudImage = {
        "background-image": `url('${this.noImageJumbotron}')`
      };

    }
  }

  /**
  * Add background image API provided to Lightbox album
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  loadLigthboxImages(){
    const backgroundImage = this.Game.background_image; 
    const backgroundImageAditional = this.Game.background_image_additional; 

    if (backgroundImage){
      const album = {
        src: backgroundImage,
        caption: `Background image of ${this.Game.name}`,
        thumb: ""
      };
      this._albums.push(album);
    }
    if (backgroundImageAditional){
      const album = {
        src: backgroundImageAditional,
        caption: `Background image aditional of ${this.Game.name}`,
        thumb: ""
      };
      this._albums.push(album);
    }
  }

  /**
  * Use browser location to go back in user navigation flow
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  goBack(){
    this._location.back();
  }

  /**
  * When is presed scroll to top of page
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  backToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

}
