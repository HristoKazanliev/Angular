import { Directive, DoCheck, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputError]',
  standalone: true,
})
export class InputErrorDirective implements DoCheck {
  private control = inject(NgControl, { self: true, optional: true});
  private el = inject(ElementRef);

  constructor() {}
  ngDoCheck(): void {
    if (this.control) {
      const isInvalid = this.control.invalid && this.control.touched;
      this.el.nativeElement.classList.toggle('input-error', !!isInvalid);
    }
  }
}
