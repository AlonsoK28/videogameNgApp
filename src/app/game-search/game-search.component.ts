import { Component, OnInit } from '@angular/core';
import { GameAPI } from '../models/games';
import { ActivatedRoute } from '@angular/router';
import { GameRestApiService } from '../services/game-rest-api.service';
import { httpError } from '../models/httpError';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//fontawesome
import { faBackspace, faSearch } from '@fortawesome/free-solid-svg-icons'; //fas
declare var $: any;

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  icons = {
    faBackspace: faBackspace,
    faSearch: faSearch
  }
  Games: GameAPI[] = [];
  searchTerm:string;
  searchTemplate:boolean = true;  
  loader:boolean = false;
  results:boolean = false;
  noResults:boolean = false;
  httpErrorCode: number;
  httpErrorMessage: string;
  searchForm: FormGroup;
  searchTermFieldControl: any;

  constructor(private gameRestApi: GameRestApiService,
              private route: ActivatedRoute ) { 
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTemplate = false;
        this.searchTerm = params.searchTerm;
        this.gameList();
      }
    });

    this.searchForm = new FormGroup({
      'searchTermField': new FormControl(this.searchTerm, [Validators.required])
    });
    this.searchTermFieldControl = this.searchForm.controls.searchTermField;

  }

  ngOnInit() {
    $('#search').tooltip('hide');
  }

  /**
  * Validate if searchTerm is present into user navigation flow
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  searchGame(){
    if (this.searchForm.valid) {
      $('#search').tooltip('hide');
      this.noResults = false;
      this.searchTemplate = false;
      this.gameList();
    }else{
      $('#search').tooltip('show');
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

  emptySearchTerm(){
    this.searchForm.reset();
  }

}
