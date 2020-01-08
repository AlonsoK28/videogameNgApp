import { Component, OnInit } from '@angular/core';
import { ProductosRestApiService } from '../services/productos-rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { GameDetailAPI } from '../models/games';
import { httpError } from '../httpError';
import { GameRestApiService } from '../services/game-rest-api.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  Game;
  slug: string = "";
  defaultImage: string = "assets/image/placeholder.png";
  loader: boolean = false;
  notFound: boolean = false;
  httpErrorCode: number;
  httpErrorMessage: string;
  backgroudImage:object;

  constructor(private gameRestApi: GameRestApiService,
              private route: ActivatedRoute ) { 
    this.route.params.subscribe(params => {
      if (params.slug) {
        this.slug = params.slug;
      }
    });
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
        this.backgroudImage = {
          "background-image": `url('${data.background_image}')`
        };
        console.log("data: ", data);
      },
      //error
      (err: httpError) => {
        this.loader = false;
        this.httpErrorCode = err.httpStatusCode;
        this.httpErrorMessage = err.httpErrorMessage;
        this.notFound = true;
      }
    );
  }

}
