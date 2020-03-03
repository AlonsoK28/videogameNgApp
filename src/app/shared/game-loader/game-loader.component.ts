import { Component, OnInit, Input } from '@angular/core';
//fontawesome
import { faCircleNotch, faPoll, faStarHalfAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'; //fas

@Component({
  selector: 'app-game-loader',
  templateUrl: './game-loader.component.html',
  styleUrls: ['./game-loader.component.css']
})
export class GameLoaderComponent implements OnInit {

  icons = {
    faCircleNotch: faCircleNotch,
    faPoll: faPoll,
    faExclamationTriangle: faExclamationTriangle,
    faStarHalfAlt: faStarHalfAlt
  }
  @Input("loader-param") loader: boolean;
  @Input("noResults-param") noResults: boolean;
  @Input("httpErrorCode-param") httpErrorCode: number;
  @Input("httpErrorMessage-param") httpErrorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
