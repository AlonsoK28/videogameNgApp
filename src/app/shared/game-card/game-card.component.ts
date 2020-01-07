import { Component, OnInit, Input } from '@angular/core';
import { GameAPI } from 'src/app/models/games';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input("games-param") Games: GameAPI;
  defaultImage: string = "assets/image/placeholder.png";
  constructor() { }

  ngOnInit() {
  }

}