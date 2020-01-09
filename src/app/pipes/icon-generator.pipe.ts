import { Pipe, PipeTransform } from '@angular/core';
import { logo } from '../logos';

@Pipe({
  name: 'iconGenerator'
})
export class IconGeneratorPipe implements PipeTransform {

  transform(iconName:string, type:string): string {
    // search for icon logo or icon prefix by associative value
    if (logo[iconName]) {
      return logo[iconName][type];
    } else {
      return logo.other[type];
    }
  }

}
