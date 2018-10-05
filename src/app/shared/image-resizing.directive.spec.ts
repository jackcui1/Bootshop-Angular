import { ImageResizingDirective } from './image-resizing.directive';

describe('ImageResizingDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
 const directive = new ImageResizingDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
