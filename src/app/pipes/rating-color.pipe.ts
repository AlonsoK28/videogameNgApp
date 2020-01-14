import { Pipe, PipeTransform } from '@angular/core';
import { ratingColorTone as colorTone } from '../models/colors';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {

  transform(ratingName:string): any {
    // search for rating color by associative value
    if (colorTone[ratingName]) {
      return colorTone[ratingName].colorName;
    } else {
      return colorTone.other.colorName;
    }  
  }
}
