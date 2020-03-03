import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe'
import { HtmlToTextPipe } from './html-to-text.pipe'
import { IconGeneratorPipe } from './icon-generator.pipe'
import { RatingColorPipe } from './rating-color.pipe'
import { SlugToWordPipe } from './slug-to-word.pipe'
import { WordToSlugPipe } from './word-to-slug.pipe'


@NgModule({
  declarations: [
    DomSanitizerPipe,
    HtmlToTextPipe,
    IconGeneratorPipe,
    RatingColorPipe,
    SlugToWordPipe,
    WordToSlugPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DomSanitizerPipe,
    HtmlToTextPipe,
    IconGeneratorPipe,
    RatingColorPipe,
    SlugToWordPipe,
    WordToSlugPipe
  ]
})
export class PipesModule { }
