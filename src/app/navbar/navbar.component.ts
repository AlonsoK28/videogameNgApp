import { Component, OnInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { WordToSlugPipe } from '../pipes/word-to-slug.pipe';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchFormNavbar: FormGroup;
  searchTermFieldNavbarControl: any;
  themeStatusLabel:string;
  themeStatus:boolean;
  themeStatusIcon:string;
  themeDarkIcon: string = 'moon';
  themeDarkLabel: string = 'Dark theme';
  themeClearIcon: string = 'sun';
  themeClearLabel: string = 'Clear theme';
  themeChanging: boolean = false;

  constructor( @Inject(DOCUMENT) private _document, private router: Router ) { 
    this.searchFormNavbar = new FormGroup({
      'searchTermNavbarField': new FormControl(null, [Validators.required])
    });
    this.searchTermFieldNavbarControl = this.searchFormNavbar.controls.searchTermNavbarField;
  }

  ngOnInit() {
    $('.tooltip-navbar').tooltip('hide');
    this.themeStatus = false;
    this.themeStatusIcon = this.themeDarkIcon;
    this.themeStatusLabel = this.themeDarkLabel;
  }

  /**
  * Get search term from submit field
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  searchGame(){
    if (this.searchFormNavbar.valid){
      $('.tooltip-navbar').tooltip('hide');
      let wordToSlug = new WordToSlugPipe();
      this.router.navigate([`game-search/`, wordToSlug.transform(this.searchTermFieldNavbarControl.value)]);
    }else{
      $('.tooltip-navbar').tooltip('show');
    }
  }

  /**
  * Used to change Boostrap 4 theme
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
  switchTheme(){
    const $theme = this._document.getElementById('theme');
    const url = 'assets/bootstrap';
    this.themeChanging = true;

    if(!this.themeStatus){
      this.themeStatusIcon = this.themeClearIcon;
      this.themeStatusLabel = this.themeClearLabel;
      this.themeStatus = true;
      $theme.setAttribute('href', `${url}/clear-bootstrap.min.css`);
    }else{
      this.themeStatusIcon = this.themeDarkIcon;
      this.themeStatusLabel = this.themeDarkLabel;
      this.themeStatus = false;
      $theme.setAttribute('href', `${url}/dark-bootstrap.min.css`);
    }

    setTimeout(()=>{
      this.themeChanging = false;
    }, 1500);
  }

}
