//Using directives
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    const text = event.target.innerText;
    switch (text) {
      case '1':
        this.highlight('Red');
        break;
      case '2':
        this.highlight('Green');
        break;
      
      case '3':
        this.highlight('Red');
        break;
      case '4':
        this.highlight('Green');
        break;
      case '5':
        this.highlight('Red');
        break;  
      default:
        this.highlight(null);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('black');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
