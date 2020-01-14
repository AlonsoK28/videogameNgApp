import { Pipe, PipeTransform } from '@angular/core';
import { platformLogo as platform, storeLogo as store } from '../models/logos';

/**
* Define platform prefix and nameIcon for display Fontawesome Icon
* @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
*/
@Pipe({
  name: 'iconGenerator'
})
export class IconGeneratorPipe implements PipeTransform {

  transform(iconName:string, type:string, gallery:string): string {
    // search for icon logo or icon prefix by associative value
    let logo;
    switch(gallery){
      case 'platform':
        logo = platform;
      break;
      case 'store':
        logo = store;
        break;
      default: 
        logo = store;
      break;
    }
    if (logo[iconName]) {
      return logo[iconName][type];
    } else {
      return logo.other[type];
    }
  }

}
