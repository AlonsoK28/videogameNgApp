import { Component, OnInit } from '@angular/core';
import {
  faAngular, faJsSquare, faNodeJs,
  faCss3Alt, faHtml5,
  faBootstrap, faFontAwesome
} from '@fortawesome/free-brands-svg-icons'; //fab
import {
  faDatabase
} from '@fortawesome/free-solid-svg-icons'; //fas
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons = {
    faAngular: faAngular,
    faJsSquare: faJsSquare,
    faNodeJs: faNodeJs,
    faCss3Alt: faCss3Alt,
    faHtml5: faHtml5,
    faBootstrap: faBootstrap,
    faFontAwesome: faFontAwesome,
    faDatabase: faDatabase

  }
  constructor() { }

  ngOnInit() {
  }

}
