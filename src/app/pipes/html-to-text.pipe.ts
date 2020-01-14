import { Pipe, PipeTransform } from '@angular/core';

/**
* Used Regexp to delete HTML tags in template 
* @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
*/
@Pipe({
  name: 'htmlToText'
})
export class HtmlToTextPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/<.*?>/g, '');
  }
}
