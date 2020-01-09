import { Pipe, PipeTransform } from '@angular/core';
import { logo } from '../logos';

@Pipe({
  name: 'iconGenerator'
})
export class IconGeneratorPipe implements PipeTransform {

  transform(iconName:string, type:string): string {
    console.log("IconGeneratorPipe: ", type);
    switch(type){
      case 'logo':
        if (logo[iconName]) {
          return logo[iconName].logo;
        } else {
          return logo.other.logo;
        }
      case 'prefix':
        if (logo[iconName]) {
          return logo[iconName].prefix;
        } else {
          return logo.other.prefix;
        }
    }
  }

}
