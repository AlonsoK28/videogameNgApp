import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-loader',
  templateUrl: './game-loader.component.html',
  styleUrls: ['./game-loader.component.css']
})
export class GameLoaderComponent implements OnInit {

  @Input("loader-param") loader: boolean;
  @Input("noResults-param") noResults: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
