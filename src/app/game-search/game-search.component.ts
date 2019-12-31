import { Component, OnInit } from '@angular/core';
import { ProductosRestApiService } from '../services/productos-rest-api.service';
import { GameAPI } from '../models/games';
@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  Games: GameAPI[] = [];


  constructor(private productosRestApi: ProductosRestApiService ) { 
    this.gameList();

  }

  ngOnInit() {
  }

  gameList(){
    return this.productosRestApi.getGameList("dead space").subscribe(
        data => {
          this.Games = data;
        }
    );
  }

}
