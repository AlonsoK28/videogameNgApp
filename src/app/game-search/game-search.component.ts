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


  constructor(private productosRestApi: ProductosRestApiService,
              private route: ActivatedRoute ) { 

    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        console.log("searchTemplate: ", this.searchTemplate);
        this.searchTerm = params.searchTerm;
        console.log("searchTerm: ", this.searchTerm);
        this.gameList();
      }
    });

  }

  ngOnInit() {
  }

  searchGame(){
    if(this.searchTerm.length == 0){
      console.log("searchTemplate: ", this.searchTemplate);
      return;
    }else{
      this.searchTemplate = false;
      console.log("searchTemplate: ", this.searchTemplate);
      this.gameList();
    }
  }

  gameList(){
    return this.productosRestApi.getGameList(this.searchTerm).subscribe(
        data => {
          this.Games = data;
        }
    );
  }

}
