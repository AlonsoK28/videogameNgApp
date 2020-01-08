import { Component, OnInit } from '@angular/core';
import { ProductosRestApiService } from '../services/productos-rest-api.service';
import { GameAPI } from '../models/games';
import { ActivatedRoute } from '@angular/router';
import { GameRestApiService } from '../services/game-rest-api.service';
@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  Games: GameAPI[] = [];
  searchTerm:string = "";
  searchTemplate:boolean = true;  
  loader:boolean = false;
  noResults:boolean = false;


  constructor(private gameRestApi: GameRestApiService,
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
    return this.gameRestApi.getGameList(this.searchTerm).subscribe(
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
