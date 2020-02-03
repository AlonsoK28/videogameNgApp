import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordToSlug'
})
export class WordToSlugPipe implements PipeTransform {

  transform(value: any): string {
    if(value){
      value = value.trim().replace(/ /g, "-").toLowerCase();
      return value;
    }
  }

}
