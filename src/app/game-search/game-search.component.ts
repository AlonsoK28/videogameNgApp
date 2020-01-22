import { Component, OnInit } from '@angular/core';
import { GameAPI } from '../models/games';
import { ActivatedRoute } from '@angular/router';
import { GameRestApiService } from '../services/game-rest-api.service';
import { httpError } from '../models/httpError';
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
  results:boolean = false;
  noResults:boolean = false;
  httpErrorCode: number;
  httpErrorMessage: string;

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

  /**
  * Validate if searchTerm is present into user navigation flow
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  searchGame(){
    this.noResults = false;
    if(this.searchTerm.length == 0){
      return;
    }else{
      this.searchTemplate = false;
      this.gameList();
    }
  }

  /**
   * Get a list of Games by search term.
   * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
   * @http https://api.rawg.io/docs/#tag/games
   * @return [Games]
   */
  gameList(){
    this.loader = true;
    this.noResults = false;
    this.results = false;
    return this.gameRestApi.getGameSearch(this.searchTerm).subscribe(
        //next
      data => { 
        this.Games = data;
        if (!data.length) {
          this.noResults = true;
        } else {
          this.results = true;
        }
        this.loader = false;
      },
      //error
      (err: httpError) => {
        this.loader = false;
        this.httpErrorCode = err.httpStatusCode;
        this.httpErrorMessage = err.httpErrorMessage;
      },
      //complete
      ()=>{
        console.info("Data correctly recieved by Observer ✔️");
      }
    );
  }

}
