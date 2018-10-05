import {Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[appImageResizing]'
})
export class ImageResizingDirective {
  @Input() imageWidth: number;
  @Input() imageHeight: number;

  constructor(private element: ElementRef) {
  }

  public imageResizing() {
   /* console.log(this.imageHeight + ' : ' + this.imageWidth);
    console.log('native image height: ' + this.el.nativeElement.height);*/
    if (this.element.nativeElement.height > this.element.nativeElement.width) {
      this.element.nativeElement.height = this.imageHeight;
    } else {
      this.element.nativeElement.width = this.imageWidth;
    }

  }

  ngAfterViewInit() {
    this.imageResizing();
  }
}
