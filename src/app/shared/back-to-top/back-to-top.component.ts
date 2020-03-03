import { Component, OnInit } from '@angular/core';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'; //fas

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  icons = {
    faChevronUp: faChevronUp
  }
  constructor() { }

  ngOnInit() {
  }

  /**
  * When is presed scroll to top of page
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  backToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
