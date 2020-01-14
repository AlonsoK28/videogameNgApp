import { Component, OnInit } from '@angular/core';
import { GameRestApiService } from '../services/game-rest-api.service';
import { GameAPI } from '../models/games';
import { httpError } from '../httpError';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  loader: boolean = false;
  noResults: boolean = false;
  results: boolean = false;
  httpErrorCode: number;
  httpErrorMessage: string;
  query:string;
  Games:GameAPI[] = [];
  platformSelected:string;
  
  constructor(private gameRestApi: GameRestApiService) { }

  ngOnInit() {
    this.gameList();
  }
  /**
   * Get the x value.
   * @return {number} The x value.
   * @autor Carlos Alonso Casales Ortega
   */
  gameList(platform?:string) {
    this.loader = true;
    this.noResults = false;
    this.results = false;
    this.query = "&search=";
    if (platform){
      this.query = `&search=${platform}`;
      this.platformSelected = platform;
    }
    return this.gameRestApi.getGameList(this.query).subscribe(
      //next
      data => {
        this.Games = data;
        if (!data.length) {
          this.noResults = true;
        }else{
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
      () => {
        console.info("Data correctly recieved by Observer ✔️");
      }
    );
  }

}
