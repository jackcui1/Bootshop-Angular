import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appBigImageResizing]'
})


export class BigImageResizingDirective {
  @Input() imageWidth: number;
  @Input() imageHeight: number;
  constructor(private element: ElementRef) { }

  public imageResizing() {
    this.element.nativeElement.height = this.imageHeight;
    this.element.nativeElement.width = this.imageWidth;
  }

  @HostListener('load') onLoad() {
    this.imageResizing();
  }
}
