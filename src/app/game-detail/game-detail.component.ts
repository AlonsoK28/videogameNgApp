import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailAPI } from '../models/games';
import { httpError } from '../httpError';
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

  goBack(){
    this._location.back();
  }

}
