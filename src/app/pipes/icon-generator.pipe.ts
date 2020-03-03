import { Pipe, PipeTransform } from '@angular/core';
import { logos } from '../models/logos';

/**
* Define platform prefix and nameIcon for display Fontawesome Icon
* @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
*/
@Pipe({
  name: 'iconGenerator'
})
export class IconGeneratorPipe implements PipeTransform {

  transform(name:string):any {
    // search for icon logo or icon prefix by associative value
    if (logos[name]) {
      return logos[name]['logo'];
    } else {
      return logos.other['logo'];
    }
  }

}
