import { Component, OnInit, Input } from '@angular/core';
import { GameAPI } from 'src/app/models/games';
//fontawesome
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; //fas

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  icons = {
    faCalendarAlt: faCalendarAlt
  }
  @Input("games-param") Games: GameAPI;
  defaultImage: string = "assets/image/placeholder.gif";
  noImage: string = "assets/image/no-image.gif";

  constructor() {
   }

  ngOnInit() {
  }

}