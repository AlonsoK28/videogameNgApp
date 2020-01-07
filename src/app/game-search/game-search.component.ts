import { Component, OnInit } from '@angular/core';
import { ProductosRestApiService } from '../services/productos-rest-api.service';
import { GameAPI } from '../models/games';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  Games: GameAPI[] = [];
  searchTerm:string = "";
  searchTemplate:boolean = true;  
  loader:boolean = true;
  noResults:boolean = false;


  constructor(private productosRestApi: ProductosRestApiService,
              private route: ActivatedRoute ) { 

    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTemplate = false;
        this.searchTerm = params.searchTerm;
        this.gameList();
      }
    });

  }

  ngOnInit() {
  }

  searchGame(){
    this.loader = true;
    this.noResults = false;
    if(this.searchTerm.length == 0){
      return;
    }else{
      this.searchTemplate = false;
      this.gameList();
    }
  }

  gameList(){
    return this.productosRestApi.getGameList(this.searchTerm).subscribe(
        data => {
          this.Games = data;
          this.loader = false;
          if (!data.length){
            this.noResults = true;
          }
        }
    );
  }

}
