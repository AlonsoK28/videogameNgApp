import { Component, OnInit } from '@angular/core';
import { ProductosRestApiService } from '../services/productos-rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { GameDetailAPI } from '../models/games';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  Game:GameDetailAPI;
  slug: string = "";

  constructor(private productosRestApi: ProductosRestApiService,
              private route: ActivatedRoute ) { 
    this.route.params.subscribe(params => {
      if (params.slug) {
        this.slug = params.slug;
      }
    });
  }

  ngOnInit() {
    this.gameDetail();
  }

  gameDetail(){
    return this.productosRestApi.getGameDetail(this.slug).subscribe( 
      data => {
        this.Game = data;
        console.log("data: ", data);
      }
    );
  }

}
