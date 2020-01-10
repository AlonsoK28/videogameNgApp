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
  httpErrorCode: number;
  httpErrorMessage: string;
  query:string;
  Games:GameAPI[] = [];
  
  constructor(private gameRestApi: GameRestApiService) { }

  ngOnInit() {
    this.gameList();
  }

  gameList() {
    this.loader = true;
    this.noResults = false;
    this.query = "page_size&platforms=playstation";
    return this.gameRestApi.getGameList(this.query).subscribe(
      //next
      data => {
        this.Games = data;
        this.loader = false;
        if (!data.length) {
          this.noResults = true;
        }
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
