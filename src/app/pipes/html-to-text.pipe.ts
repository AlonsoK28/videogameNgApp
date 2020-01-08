import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToText'
})
export class HtmlToTextPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/<.*?>/g, '');
  }
}
