import { Directive, Input, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() counterValue: number;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.counterValue < 0) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue')
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');
    };
  };
};
