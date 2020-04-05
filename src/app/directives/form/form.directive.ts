import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFormDirective]',
})
export class FormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
