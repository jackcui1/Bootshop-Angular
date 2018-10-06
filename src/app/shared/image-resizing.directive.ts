import {Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[appImageResizing]'
})
export class ImageResizingDirective {
  @Input() imageWidth: number;
  @Input() imageHeight: number;

  constructor(private element: ElementRef) {
    console.log('constructor: ' + this.element.nativeElement.height);
  }

  public imageResizing() {
    if (this.element.nativeElement.height > this.element.nativeElement.width ) {
      this.element.nativeElement.height = this.imageHeight;
    } else {
      this.element.nativeElement.width = this.imageWidth;
    }
  }

  @HostListener('load')
  onLoad() {

    console.log('height after loading: ' + this.element.nativeElement.height);
    this.imageResizing();
  }
}
