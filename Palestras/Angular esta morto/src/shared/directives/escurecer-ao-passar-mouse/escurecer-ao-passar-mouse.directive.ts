import { Directive, ElementRef, HostListener, Input, HostBinding, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appEscurecerAoPassarMouse]'
})
export class EscurecerAoPassarMouseDirective implements OnInit {

  @Input() opacidade = 0.8;
  @Input() backgroundColor = '#333';

  constructor(private element: ElementRef, private renderder: Renderer2) {
    this.element.nativeElement.style.transition = 'all 0.2s ease-in-out';
  }

  ngOnInit(): void {
    this.renderder.setStyle(this.element.nativeElement, 'background-color', this.backgroundColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.opacity = this.opacidade;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.opacity = 1;
  }

}
